# Private Apps

Private app hosting is now available for Tidbyt Plus and [Tidbyt for Teams](https://discuss.tidbyt.com/t/introducing-tidbyt-for-teams/5391) subscribers! Creating a new app, tailored to your needs, is quick and easy. While completely hosted in Tidbyt’s cloud, your apps are restricted to yourself, or members of your team.

## Create an app
To create an app in the current working directory, run the following:

```
pixlet private create
```

If you're not yet subscribed to Tidbyt Plus, you will receive an error message with a link for signing up!

With Tidbyt for Teams, you can also create an organization-wide app. To find your org ID, check the `Developer` tab on the Tidbyt for Teams portal.

```
pixlet private create --org {{ your_org_id }}
```

## Deploy your app

Most of the time, if an app works locally, it'll work as a private app. Just run the upload command (in the same directory as the app was created) to deploy:

```
pixlet private upload
```

For more fine grained control of individual versions of your app, check out the other private app commands:

```
pixlet private --help
```
