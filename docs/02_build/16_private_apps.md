# Private Apps
Private apps are now available for [Tidbyt for Teams](https://discuss.tidbyt.com/t/introducing-tidbyt-for-teams/5391) customers! Creating a new app, tailored to your needs, is quick and easy. While completely hosted in Tidbyt’s cloud, your apps are restricted to members of your team.

## Create an app
To create an app, run the following. To find your org ID, check the `Developer` tab on the Tidbyt for Teams portal:
```
pixlet private create --org {{ your_org_id }}
```

## Deploy your app
When you're ready to deploy your app to the rest of your organization, run through the following steps. First, create a bundle. Think of this as an artifact that represents your current source code version:
```
pixlet private bundle ./
```

Once you have a bundle, you can upload it to our backend with a version. To find your app ID, check your `manifest.yaml` file that was generated as part of `pixlet create`:
```
pixlet private upload bundle.tar.gz --app {{ app_id }} --version v0.0.1
```

Finally, you can deploy your version to all of your organization:
```
pixlet private deploy --app {{ app_id }} --version v0.0.1
```

## Revert to a previous version
If you wish to revert your app to a previously deployed version, simply run the deploy command with a bundle version you have previously uploaded:
```
pixlet private deploy --app {{ app_id }} --version v0.0.0
```