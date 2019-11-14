# getElevationAPI

[Mapbox Elevation](https://www.npmjs.com/package/mapbox-elevation) AWS Lambda Function deployed using [Serverless Framework](https://serverless.com/).

### 1. Edit files

Add your Mapbox ID in the "handler.js" file...

`var getElevation = MapboxElevation('<YOUR-MAPBOX-KEY>');`

Populate your AWS variables in the "serverless.yml" file...

 ```
 provider:
  name: aws
  runtime: nodejs10.x
  stage: <YOUR-STAGE>
  profile: <YOUR-PROFILE>
  region: us-west-2
  role: arn:aws:iam::<YOUR-IAM-ID>:role/ServerlessFrameworkRole
  timeout: 10
  iamRoleStatements:
  - Effect: 'Allow'
    Action:
      - 'lambda:InvokeFunction'
    Resource: "*"
  deploymentBucket:
    name: <YOUR-BUCKET-NAME>
  ```

### 2. Install dependencies

`npm install mapbox-elevation`

`npm install -g serverless`

`npm install serverless-plugin-warmup --save-dev`

### 3. Create package.json

`npm init`

### 4. Deploy Lambda Function

`serverless deploy`

### 5. Test endpoint

Insert your endpoint url at `url: "<YOUR-AWS-ENDPOINT>" + "elevation?lng=44&lat=45",` below

```
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
    </head>
<script type="text/javascript">
    $.ajax({
        type: "GET",
        url: "<YOUR-AWS-ENDPOINT>" + "elevation?lng=44&lat=45",
        headers: {
        }
    }).done((data) => {
        console.log(data);
    }).fail(() => {
        console.log('error!');
    })
</script>
</html>
```
