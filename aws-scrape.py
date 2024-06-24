import re 
import json 
import pandas as pd
from bs4 import BeautifulSoup


def main():
    services = {}
    with open("services.html", "r") as f:
        contents = f.read()
        soup = BeautifulSoup(contents, "html.parser")
        for category in soup.select('div[class^="categoryHeader"]'):
            cat = category.text.strip()
            if cat:
                for a in category.find_next('div').find_next('div').find_all('a'):
                    service = a.text.strip()
                    link = re.search(r"(aws.*)\/.*\?", a['href']) # double check this i think its to broad. 
                    if link:        
                        text = re.sub("\s\s+", " ", a.text.strip())
                        services[text] = {"link": link.group(1),
                                          'category': cat}
                       

                        
            

    df = pd.DataFrame(list(services.items()), columns=['Service', 'Link'])
    df.drop_duplicates(subset='Link', keep='first', inplace=True) # also drop aws.amazon.com
    df.set_index('Service', inplace=True)
    df_dict = df['Link'].to_dict()
    with open('services.json', 'w') as f:
        json.dump(df_dict, f)

    
if __name__ == '__main__':
   main()