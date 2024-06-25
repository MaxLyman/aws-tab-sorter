document.addEventListener('DOMContentLoaded', (event) => {  
    console.log("Popup loaded") 
    let AwsSortButton = document.getElementById('sort-button')
    let CategoryCheckBox = document.getElementById('category-checkbox')
    
    chrome.storage.sync.get("checkboxState", (data) => {
        CategoryCheckBox.checked = data.checkboxState || false
    })

    CategoryCheckBox.addEventListener('change', () => {
        chrome.storage.sync.set({checkboxState: CategoryCheckBox.checked});
    })

    AwsSortButton.addEventListener('click', async () => {

        if (CategoryCheckBox.checked) {
            chrome.tabs.query({}, function(tabs) {    
                let tab_dict = {} //very pythonic but oh well going to be a dict of lists with cat as key and
                for (let service in services) {
                    let category = services[service]["category"]
                    tab_dict[category] = tab_dict[category] || [] // ??= (nullish operator) only assigns empty array if tab_dict[category] is null or undefined || [] will use any falsy val
                    tab_dict[category].push(...tabs.filter(tab => tab.url.includes(services[service]["link"])).map(tab => tab.id))
                }
                catagorizeTabs(tab_dict)
            })
        } else {
            chrome.tabs.query({}, function(tabs) { 
                // find all other supported tabs
                let tab_dict = {}
                for (let service in services) {
                    tab_dict[service] = tabs.filter(tab => tab.url.includes(services[service]["link"])).map(tab => tab.id)
                }
                catagorizeTabs(tab_dict)
            })
        }
    })



})

function catagorizeTabs(tab_dict){
    for (let key in tab_dict) {
        if (tab_dict[key].length > 0) {
            chrome.tabGroups.query({title: key}, function(groups) {
                if (groups.length > 0){
                    chrome.tabs.group({groupId: groups[0].id, tabIds: tab_dict[key]}, function() {
                        checkCurrentTabGroup()
                    })
                } else {
                    chrome.tabs.group({tabIds: tab_dict[key]}, function(groupId) {
                        chrome.tabGroups.update(groupId, {title: key, collapsed: true}, function() {
                            checkCurrentTabGroup()
                        })
                    })
                }
            })
        }
    }
}

function checkCurrentTabGroup(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTab = tabs[0]
        console.log(currentTab.url, currentTab.groupId)
        if (currentTab.groupId >= 0) {
            chrome.tabGroups.update(currentTab.groupId, {collapsed: false})
        }
    });
}