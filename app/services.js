var services = {
    "AWS Gov Cloud": {
        "link": "aws.amazon.com/govcloud-us",
        "category": "AWS Gov Cloud"
    },
    "AWS Sign In": {
        "link": "signin.aws.amazon.com",
        "category": "AWS Sign In"
    },
    "Docs": {
        "link": "docs.aws.amazon.com",
        "category": "AWS Docs"
    },
    "AWS Console": {
        "link": "aws.amazon.com/console",
        "category": "AWS Console"
    },
    "EC2": {
        "link": "aws.amazon.com/ec2",
        "category": "Compute"
    },
    "Lambda": {
        "link": "aws.amazon.com/lambda",
        "category": "Compute"
    },
    "Batch": {
        "link": "aws.amazon.com/batch",
        "category": "Compute"
    },
    "Elastic Beanstalk": {
        "link": "aws.amazon.com/elasticbeanstalk",
        "category": "Compute"
    },
    "Serverless Application Repository": {
        "link": "aws.amazon.com/serverlessrepo",
        "category": "Compute"
    },
    "AWS Outposts": {
        "link": "aws.amazon.com/outposts",
        "category": "Compute"
    },
    "EC2 Image Builder": {
        "link": "aws.amazon.com/imagebuilder",
        "category": "Compute"
    },
    "AWS App Runner": {
        "link": "aws.amazon.com/apprunner",
        "category": "Compute"
    },
    "AWS SimSpace Weaver": {
        "link": "aws.amazon.com/simspaceweaver",
        "category": "Compute"
    },
    "Elastic Container Service": {
        "link": "aws.amazon.com/ecs/v2",
        "category": "Containers"
    },
    "Elastic Kubernetes Service": {
        "link": "aws.amazon.com/eks",
        "category": "Containers"
    },
    "Red Hat OpenShift Service on AWS": {
        "link": "aws.amazon.com/rosa",
        "category": "Containers"
    },
    "Elastic Container Registry": {
        "link": "aws.amazon.com/ecr",
        "category": "Containers"
    },
    "S3": {
        "link": "aws.amazon.com/s3",
        "category": "Storage"
    },
    "EFS": {
        "link": "aws.amazon.com/efs",
        "category": "Storage"
    },
    "FSx": {
        "link": "aws.amazon.com/fsx",
        "category": "Storage"
    },
    "S3 Glacier": {
        "link": "aws.amazon.com/glacier",
        "category": "Storage"
    },
    "Storage Gateway": {
        "link": "aws.amazon.com/storagegateway",
        "category": "Storage"
    },
    "AWS Backup": {
        "link": "aws.amazon.com/backup",
        "category": "Storage"
    },
    "AWS Elastic Disaster Recovery": {
        "link": "aws.amazon.com/drs",
        "category": "Storage"
    },
    "RDS": {
        "link": "aws.amazon.com/rds",
        "category": "Database"
    },
    "ElastiCache": {
        "link": "aws.amazon.com/elasticache",
        "category": "Database"
    },
    "Neptune": {
        "link": "aws.amazon.com/neptune",
        "category": "Database"
    },
    "Amazon QLDB": {
        "link": "aws.amazon.com/qldb",
        "category": "Database"
    },
    "Amazon DocumentDB": {
        "link": "aws.amazon.com/docdb",
        "category": "Database"
    },
    "Amazon Keyspaces": {
        "link": "aws.amazon.com/keyspaces",
        "category": "Database"
    },
    "Amazon Timestream": {
        "link": "aws.amazon.com/timestream",
        "category": "Database"
    },
    "DynamoDB": {
        "link": "aws.amazon.com/dynamodbv2",
        "category": "Database"
    },
    "Amazon MemoryDB for Redis": {
        "link": "aws.amazon.com/memorydb",
        "category": "Database"
    },
    "AWS Migration Hub": {
        "link": "aws.amazon.com/migrationhub",
        "category": "Migration & Transfer"
    },
    "AWS Application Migration Service": {
        "link": "aws.amazon.com/mgn",
        "category": "Migration & Transfer"
    },
    "Application Discovery Service": {
        "link": "aws.amazon.com/discovery",
        "category": "Migration & Transfer"
    },
    "Database Migration Service": {
        "link": "aws.amazon.com/dms/v2",
        "category": "Migration & Transfer"
    },
    "AWS Transfer Family": {
        "link": "aws.amazon.com/transfer",
        "category": "Migration & Transfer"
    },
    "AWS Snow Family": {
        "link": "aws.amazon.com/snowfamily",
        "category": "Migration & Transfer"
    },
    "DataSync": {
        "link": "aws.amazon.com/datasync",
        "category": "Migration & Transfer"
    },
    "AWS Mainframe Modernization": {
        "link": "aws.amazon.com/m2",
        "category": "Migration & Transfer"
    },
    "VPC": {
        "link": "aws.amazon.com/vpc",
        "category": "Networking & Content Delivery"
    },
    "CloudFront": {
        "link": "aws.amazon.com/cloudfront/v4",
        "category": "Networking & Content Delivery"
    },
    "Route 53": {
        "link": "aws.amazon.com/route53/v2",
        "category": "Networking & Content Delivery"
    },
    "API Gateway": {
        "link": "aws.amazon.com/apigateway",
        "category": "Networking & Content Delivery"
    },
    "Direct Connect": {
        "link": "aws.amazon.com/directconnect/v2",
        "category": "Networking & Content Delivery"
    },
    "AWS App Mesh": {
        "link": "aws.amazon.com/appmesh",
        "category": "Networking & Content Delivery"
    },
    "Global Accelerator": {
        "link": "aws.amazon.com/globalaccelerator",
        "category": "Networking & Content Delivery"
    },
    "AWS Cloud Map": {
        "link": "aws.amazon.com/cloudmap",
        "category": "Networking & Content Delivery"
    },
    "Route 53 Application Recovery Controller": {
        "link": "aws.amazon.com/route53recovery",
        "category": "Networking & Content Delivery"
    },
    "AWS Private 5G": {
        "link": "aws.amazon.com/private-networks",
        "category": "Networking & Content Delivery"
    },
    "CodeStar": {
        "link": "aws.amazon.com/codesuite/codestar",
        "category": "Developer Tools"
    },
    "CodeCommit": {
        "link": "aws.amazon.com/codecommit",
        "category": "Developer Tools"
    },
    "CodeBuild": {
        "link": "aws.amazon.com/codesuite/codebuild",
        "category": "Developer Tools"
    },
    "CodeDeploy": {
        "link": "aws.amazon.com/codesuite/codedeploy",
        "category": "Developer Tools"
    },
    "CodePipeline": {
        "link": "aws.amazon.com/codesuite/codepipeline",
        "category": "Developer Tools"
    },
    "Cloud9": {
        "link": "aws.amazon.com/cloud9",
        "category": "Developer Tools"
    },
    "CloudShell": {
        "link": "aws.amazon.com/cloudshell",
        "category": "Developer Tools"
    },
    "X-Ray": {
        "link": "aws.amazon.com/xray",
        "category": "Developer Tools"
    },
    "AWS FIS": {
        "link": "aws.amazon.com/fis",
        "category": "Developer Tools"
    },
    "CodeArtifact": {
        "link": "aws.amazon.com/codesuite/codeartifact",
        "category": "Developer Tools"
    },
    "Amazon CodeCatalyst": {
        "link": "aws.amazon.com/codecatalyst",
        "category": "Developer Tools"
    },
    "AWS AppConfig": {
        "link": "aws.amazon.com/systems-manager/appconfig",
        "category": "Developer Tools"
    },
    "Amazon Q Developer (Including Amazon CodeWhisperer)": {
        "link": "aws.amazon.com/amazonq/developer",
        "category": "Developer Tools"
    },
    "Application Composer": {
        "link": "aws.amazon.com/composer",
        "category": "Developer Tools"
    },
    "Managed Services": {
        "link": "aws.amazon.com/managedservices",
        "category": "Customer Enablement"
    },
    "Activate for Startups": {
        "link": "aws.amazon.com/activate",
        "category": "Customer Enablement"
    },
    "Support": {
        "link": "aws.amazon.com/support",
        "category": "Customer Enablement"
    },
    "AWS re:Post Private": {
        "link": "aws.amazon.com/repost-private",
        "category": "Customer Enablement"
    },
    "AWS RoboMaker": {
        "link": "aws.amazon.com/robomaker",
        "category": "Robotics"
    },
    "Amazon Managed Blockchain": {
        "link": "aws.amazon.com/managedblockchain",
        "category": "Blockchain"
    },
    "Ground Station": {
        "link": "aws.amazon.com/groundstation",
        "category": "Satellite"
    },
    "Amazon Braket": {
        "link": "aws.amazon.com/braket",
        "category": "Quantum Technologies"
    },
    "AWS Organizations": {
        "link": "aws.amazon.com/organizations/v2",
        "category": "Management & Governance"
    },
    "CloudWatch": {
        "link": "aws.amazon.com/cloudwatch",
        "category": "Management & Governance"
    },
    "AWS Auto Scaling": {
        "link": "aws.amazon.com/awsautoscaling",
        "category": "Management & Governance"
    },
    "CloudFormation": {
        "link": "aws.amazon.com/cloudformation",
        "category": "Management & Governance"
    },
    "AWS Config": {
        "link": "aws.amazon.com/config",
        "category": "Management & Governance"
    },
    "OpsWorks": {
        "link": "aws.amazon.com/opsworks/landing",
        "category": "Management & Governance"
    },
    "Service Catalog": {
        "link": "aws.amazon.com/servicecatalog",
        "category": "Management & Governance"
    },
    "Systems Manager": {
        "link": "aws.amazon.com/systems-manager",
        "category": "Management & Governance"
    },
    "Trusted Advisor": {
        "link": "aws.amazon.com/trustedadvisor",
        "category": "Management & Governance"
    },
    "Control Tower": {
        "link": "aws.amazon.com/controltower",
        "category": "Management & Governance"
    },
    "AWS Well-Architected Tool": {
        "link": "aws.amazon.com/wellarchitected",
        "category": "Management & Governance"
    },
    "AWS Chatbot": {
        "link": "aws.amazon.com/chatbot",
        "category": "Management & Governance"
    },
    "Launch Wizard": {
        "link": "aws.amazon.com/launchwizard",
        "category": "Management & Governance"
    },
    "AWS Compute Optimizer": {
        "link": "aws.amazon.com/compute-optimizer",
        "category": "Management & Governance"
    },
    "Resource Groups & Tag Editor": {
        "link": "aws.amazon.com/resource-groups",
        "category": "Management & Governance"
    },
    "Amazon Grafana": {
        "link": "aws.amazon.com/grafana",
        "category": "Management & Governance"
    },
    "Amazon Prometheus": {
        "link": "aws.amazon.com/prometheus",
        "category": "Management & Governance"
    },
    "AWS Resilience Hub": {
        "link": "aws.amazon.com/resiliencehub",
        "category": "Management & Governance"
    },
    "Incident Manager": {
        "link": "aws.amazon.com/systems-manager/incidents",
        "category": "Management & Governance"
    },
    "AWS License Manager": {
        "link": "aws.amazon.com/license-manager",
        "category": "Management & Governance"
    },
    "Service Quotas": {
        "link": "aws.amazon.com/servicequotas",
        "category": "Management & Governance"
    },
    "AWS Proton": {
        "link": "aws.amazon.com/proton",
        "category": "Management & Governance"
    },
    "CloudTrail": {
        "link": "aws.amazon.com/cloudtrailv2",
        "category": "Management & Governance"
    },
    "AWS Resource Explorer": {
        "link": "aws.amazon.com/resource-explorer",
        "category": "Management & Governance"
    },
    "AWS User Notifications": {
        "link": "aws.amazon.com/notifications",
        "category": "Management & Governance"
    },
    "AWS Telco Network Builder": {
        "link": "aws.amazon.com/tnb",
        "category": "Management & Governance"
    },
    "Kinesis Video Streams": {
        "link": "aws.amazon.com/kinesisvideo",
        "category": "Media Services"
    },
    "MediaConvert": {
        "link": "aws.amazon.com/mediaconvert",
        "category": "Media Services"
    },
    "MediaLive": {
        "link": "aws.amazon.com/medialive",
        "category": "Media Services"
    },
    "MediaPackage": {
        "link": "aws.amazon.com/mediapackage",
        "category": "Media Services"
    },
    "MediaStore": {
        "link": "aws.amazon.com/mediastore",
        "category": "Media Services"
    },
    "MediaTailor": {
        "link": "aws.amazon.com/mediatailor",
        "category": "Media Services"
    },
    "Elemental Appliances & Software": {
        "link": "aws.amazon.com/elemental-appliances-software",
        "category": "Media Services"
    },
    "Elastic Transcoder": {
        "link": "aws.amazon.com/elastictranscoder",
        "category": "Media Services"
    },
    "Nimble Studio": {
        "link": "aws.amazon.com/nimblestudio",
        "category": "Media Services"
    },
    "MediaConnect": {
        "link": "aws.amazon.com/mediaconnect",
        "category": "Media Services"
    },
    "Amazon Interactive Video Service": {
        "link": "aws.amazon.com/ivs",
        "category": "Media Services"
    },
    "AWS Deadline Cloud": {
        "link": "aws.amazon.com/deadlinecloud",
        "category": "Media Services"
    },
    "Amazon SageMaker": {
        "link": "aws.amazon.com/sagemaker",
        "category": "Machine Learning"
    },
    "Amazon Augmented AI": {
        "link": "aws.amazon.com/a2i",
        "category": "Machine Learning"
    },
    "Amazon CodeGuru": {
        "link": "aws.amazon.com/codeguru",
        "category": "Machine Learning"
    },
    "Amazon DevOps Guru": {
        "link": "aws.amazon.com/devops-guru",
        "category": "Machine Learning"
    },
    "Amazon Comprehend": {
        "link": "aws.amazon.com/comprehend",
        "category": "Machine Learning"
    },
    "Amazon Forecast": {
        "link": "aws.amazon.com/forecast",
        "category": "Machine Learning"
    },
    "Amazon Fraud Detector": {
        "link": "aws.amazon.com/frauddetector",
        "category": "Machine Learning"
    },
    "Amazon Kendra": {
        "link": "aws.amazon.com/kendra",
        "category": "Machine Learning"
    },
    "Amazon Personalize": {
        "link": "aws.amazon.com/personalize",
        "category": "Machine Learning"
    },
    "Amazon Polly": {
        "link": "aws.amazon.com/polly",
        "category": "Machine Learning"
    },
    "Amazon Rekognition": {
        "link": "aws.amazon.com/rekognition",
        "category": "Machine Learning"
    },
    "Amazon Textract": {
        "link": "aws.amazon.com/textract",
        "category": "Machine Learning"
    },
    "Amazon Transcribe": {
        "link": "aws.amazon.com/transcribe",
        "category": "Machine Learning"
    },
    "Amazon Translate": {
        "link": "aws.amazon.com/translate",
        "category": "Machine Learning"
    },
    "AWS DeepComposer": {
        "link": "aws.amazon.com/deepcomposer",
        "category": "Machine Learning"
    },
    "AWS DeepRacer": {
        "link": "aws.amazon.com/deepracer",
        "category": "Machine Learning"
    },
    "AWS Panorama": {
        "link": "aws.amazon.com/panorama",
        "category": "Machine Learning"
    },
    "Amazon Monitron": {
        "link": "aws.amazon.com/monitron",
        "category": "Machine Learning"
    },
    "AWS HealthLake": {
        "link": "aws.amazon.com/healthlake",
        "category": "Machine Learning"
    },
    "Amazon Lookout for Vision": {
        "link": "aws.amazon.com/lookoutvision",
        "category": "Machine Learning"
    },
    "Amazon Lookout for Equipment": {
        "link": "aws.amazon.com/lookoutequipment",
        "category": "Machine Learning"
    },
    "Amazon Lookout for Metrics": {
        "link": "aws.amazon.com/lookoutmetrics",
        "category": "Machine Learning"
    },
    "Amazon Lex": {
        "link": "aws.amazon.com/lexv2",
        "category": "Machine Learning"
    },
    "Amazon Comprehend Medical": {
        "link": "aws.amazon.com/comprehendmedical",
        "category": "Machine Learning"
    },
    "AWS HealthOmics": {
        "link": "aws.amazon.com/omics",
        "category": "Machine Learning"
    },
    "Amazon Bedrock": {
        "link": "aws.amazon.com/bedrock",
        "category": "Machine Learning"
    },
    "AWS HealthImaging": {
        "link": "aws.amazon.com/medical-imaging",
        "category": "Machine Learning"
    },
    "Amazon Q": {
        "link": "aws.amazon.com/amazonq",
        "category": "Machine Learning"
    },
    "Amazon Q Business": {
        "link": "aws.amazon.com/amazonq/business",
        "category": "Machine Learning"
    },
    "Athena": {
        "link": "aws.amazon.com/athena",
        "category": "Analytics"
    },
    "Amazon Redshift": {
        "link": "aws.amazon.com/redshiftv2",
        "category": "Analytics"
    },
    "CloudSearch": {
        "link": "aws.amazon.com/cloudsearch",
        "category": "Analytics"
    },
    "Amazon OpenSearch Service": {
        "link": "aws.amazon.com/aos",
        "category": "Analytics"
    },
    "Kinesis": {
        "link": "aws.amazon.com/kinesis",
        "category": "Analytics"
    },
    "Data Pipeline": {
        "link": "aws.amazon.com/datapipeline",
        "category": "Analytics"
    },
    "AWS Data Exchange": {
        "link": "aws.amazon.com/dataexchange",
        "category": "Analytics"
    },
    "AWS Lake Formation": {
        "link": "aws.amazon.com/lakeformation",
        "category": "Analytics"
    },
    "MSK": {
        "link": "aws.amazon.com/msk",
        "category": "Analytics"
    },
    "AWS Glue DataBrew": {
        "link": "aws.amazon.com/databrew",
        "category": "Analytics"
    },
    "Amazon FinSpace": {
        "link": "aws.amazon.com/finspace",
        "category": "Analytics"
    },
    "AWS Glue": {
        "link": "aws.amazon.com/glue",
        "category": "Analytics"
    },
    "Amazon Data Firehose": {
        "link": "aws.amazon.com/firehose",
        "category": "Analytics"
    },
    "EMR": {
        "link": "aws.amazon.com/emr",
        "category": "Analytics"
    },
    "AWS Clean Rooms": {
        "link": "aws.amazon.com/cleanrooms",
        "category": "Analytics"
    },
    "Amazon DataZone": {
        "link": "aws.amazon.com/datazone",
        "category": "Analytics"
    },
    "AWS Entity Resolution": {
        "link": "aws.amazon.com/entityresolution",
        "category": "Analytics"
    },
    "Managed Apache Flink": {
        "link": "aws.amazon.com/flink",
        "category": "Analytics"
    },
    "Resource Access Manager": {
        "link": "aws.amazon.com/ram",
        "category": "Security, Identity, & Compliance"
    },
    "Cognito": {
        "link": "aws.amazon.com/cognito/v2",
        "category": "Security, Identity, & Compliance"
    },
    "Secrets Manager": {
        "link": "aws.amazon.com/secretsmanager",
        "category": "Security, Identity, & Compliance"
    },
    "GuardDuty": {
        "link": "aws.amazon.com/guardduty",
        "category": "Security, Identity, & Compliance"
    },
    "Amazon Inspector": {
        "link": "aws.amazon.com/inspector/v2",
        "category": "Security, Identity, & Compliance"
    },
    "Amazon Macie": {
        "link": "aws.amazon.com/macie",
        "category": "Security, Identity, & Compliance"
    },
    "IAM Identity Center": {
        "link": "aws.amazon.com/singlesignon",
        "category": "Security, Identity, & Compliance"
    },
    "Certificate Manager": {
        "link": "aws.amazon.com/acm",
        "category": "Security, Identity, & Compliance"
    },
    "Key Management Service": {
        "link": "aws.amazon.com/kms",
        "category": "Security, Identity, & Compliance"
    },
    "CloudHSM": {
        "link": "aws.amazon.com/cloudhsm",
        "category": "Security, Identity, & Compliance"
    },
    "Directory Service": {
        "link": "aws.amazon.com/directoryservicev2",
        "category": "Security, Identity, & Compliance"
    },
    "WAF & Shield": {
        "link": "aws.amazon.com/wafv2",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Firewall Manager": {
        "link": "aws.amazon.com/wafv2/fmsv2",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Artifact": {
        "link": "aws.amazon.com/artifact",
        "category": "Security, Identity, & Compliance"
    },
    "Detective": {
        "link": "aws.amazon.com/detective",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Signer": {
        "link": "aws.amazon.com/signer",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Private Certificate Authority": {
        "link": "aws.amazon.com/acm-pca",
        "category": "Security, Identity, & Compliance"
    },
    "Security Hub": {
        "link": "aws.amazon.com/securityhub",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Audit Manager": {
        "link": "aws.amazon.com/auditmanager",
        "category": "Security, Identity, & Compliance"
    },
    "Security Lake": {
        "link": "aws.amazon.com/securitylake",
        "category": "Security, Identity, & Compliance"
    },
    "Amazon Verified Permissions": {
        "link": "aws.amazon.com/verifiedpermissions",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Payment Cryptography": {
        "link": "aws.amazon.com/payment-cryptography",
        "category": "Security, Identity, & Compliance"
    },
    "IAM": {
        "link": "aws.amazon.com/iam",
        "category": "Security, Identity, & Compliance"
    },
    "AWS Marketplace": {
        "link": "aws.amazon.com/marketplace",
        "category": "Cloud Financial Management"
    },
    "AWS Billing Conductor": {
        "link": "aws.amazon.com/billingconductor",
        "category": "Cloud Financial Management"
    },
    "Billing and Cost Management": {
        "link": "aws.amazon.com/costmanagement",
        "category": "Cloud Financial Management"
    },
    "AWS Amplify": {
        "link": "aws.amazon.com/amplify",
        "category": "Front-end Web & Mobile"
    },
    "AWS AppSync": {
        "link": "aws.amazon.com/appsync",
        "category": "Front-end Web & Mobile"
    },
    "Device Farm": {
        "link": "aws.amazon.com/devicefarm",
        "category": "Front-end Web & Mobile"
    },
    "Amazon Location Service": {
        "link": "aws.amazon.com/location",
        "category": "Front-end Web & Mobile"
    },
    "Step Functions": {
        "link": "aws.amazon.com/states",
        "category": "Application Integration"
    },
    "Amazon AppFlow": {
        "link": "aws.amazon.com/appflow",
        "category": "Application Integration"
    },
    "Amazon MQ": {
        "link": "aws.amazon.com/amazon-mq",
        "category": "Application Integration"
    },
    "Simple Notification Service": {
        "link": "aws.amazon.com/sns/v3",
        "category": "Application Integration"
    },
    "Simple Queue Service": {
        "link": "aws.amazon.com/sqs/v3",
        "category": "Application Integration"
    },
    "SWF": {
        "link": "aws.amazon.com/swf/v2",
        "category": "Application Integration"
    },
    "Managed Apache Airflow": {
        "link": "aws.amazon.com/mwaa",
        "category": "Application Integration"
    },
    "Amazon EventBridge": {
        "link": "aws.amazon.com/events",
        "category": "Application Integration"
    },
    "AWS B2B Data Interchange": {
        "link": "aws.amazon.com/b2bi",
        "category": "Application Integration"
    },
    "Amazon Connect": {
        "link": "aws.amazon.com/connect/v2",
        "category": "Business Applications"
    },
    "Amazon Simple Email Service": {
        "link": "aws.amazon.com/ses",
        "category": "Business Applications"
    },
    "Amazon WorkDocs": {
        "link": "aws.amazon.com/zocalo",
        "category": "Business Applications"
    },
    "Amazon WorkMail": {
        "link": "aws.amazon.com/workmail/v2",
        "category": "Business Applications"
    },
    "AWS Supply Chain": {
        "link": "aws.amazon.com/scn",
        "category": "Business Applications"
    },
    "AWS AppFabric": {
        "link": "aws.amazon.com/appfabric",
        "category": "Business Applications"
    },
    "AWS Wickr": {
        "link": "aws.amazon.com/wickr",
        "category": "Business Applications"
    },
    "Amazon Chime SDK": {
        "link": "aws.amazon.com/chime-sdk",
        "category": "Business Applications"
    },
    "Amazon One Enterprise": {
        "link": "aws.amazon.com/one-enterprise",
        "category": "Business Applications"
    },
    "Amazon Pinpoint": {
        "link": "aws.amazon.com/pinpointv2",
        "category": "Business Applications"
    },
    "WorkSpaces": {
        "link": "aws.amazon.com/workspaces/v2",
        "category": "End User Computing"
    },
    "AppStream 2.0": {
        "link": "aws.amazon.com/appstream2",
        "category": "End User Computing"
    },
    "WorkSpaces Secure Browser": {
        "link": "aws.amazon.com/workspaces-web",
        "category": "End User Computing"
    },
    "WorkSpaces Thin Client": {
        "link": "aws.amazon.com/workspaces-thin-client",
        "category": "End User Computing"
    },
    "IoT Analytics": {
        "link": "aws.amazon.com/iotanalytics",
        "category": "Internet of Things"
    },
    "IoT Device Defender": {
        "link": "aws.amazon.com/devicedefender",
        "category": "Internet of Things"
    },
    "IoT Device Management": {
        "link": "aws.amazon.com/iotdm",
        "category": "Internet of Things"
    },
    "IoT Greengrass": {
        "link": "aws.amazon.com/greengrass",
        "category": "Internet of Things"
    },
    "IoT SiteWise": {
        "link": "aws.amazon.com/iotsitewise",
        "category": "Internet of Things"
    },
    "IoT Core": {
        "link": "aws.amazon.com/iot",
        "category": "Internet of Things"
    },
    "IoT Events": {
        "link": "aws.amazon.com/iotevents",
        "category": "Internet of Things"
    },
    "AWS IoT FleetWise": {
        "link": "aws.amazon.com/iotfleetwise",
        "category": "Internet of Things"
    },
    "IoT TwinMaker": {
        "link": "aws.amazon.com/iottwinmaker",
        "category": "Internet of Things"
    },
    "Amazon GameLift": {
        "link": "aws.amazon.com/gamelift",
        "category": "Game Development"
    }
};

// https://us-east-1.console.aws.amazon.com/ecr/home?region=us-east-1
// https://us-east-1.console.aws.amazon.com/composer/home?region=us-east-1#
// https://us-east-1.console.aws.amazon.com/ecs/v2/home?region=us-east-1#
// https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/home?region=us-east-1#
// https://us-east-1.console.aws.amazon.com/codesuite/codebuild/home?region=us-east-1