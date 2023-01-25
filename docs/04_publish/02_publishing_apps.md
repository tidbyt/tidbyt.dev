# Publishing Apps
So pumped you're here and want to publish an app! If you haven't done so already, check out our [code of conduct](../05_engage/02_code_of_conduct.md) and the overview on [community apps](./01_community_apps.md) to get a better sense of what you're getting yourself into. You'll also want to check out the guide on [authoring apps](../02_build/05_authoring_apps.md) to get a better sense of how everything works together.

One final note before we hop in - you may want to check out the [schema docs](../06_reference/schema.md) if you haven't already. Schema allows you to display options inside of the Tidbyt mobile app so the user can configure your starlark applet.

## Quick Start
Fork and clone the [Tidbyt community repo](https://github.com/tidbyt/community) to your local machine, and then run the following from the local folder to generate everything you need!
```
pixlet create
```

> Note: the codegen tool is a bit picky. This is because these strings show up in the Tidbyt mobile app and we want to ensure the UX works as expected.

Once created, edit `apps/{{appname}}/{{app_name}}.star` with your source code.

When you're ready to publish, run the following to ensure your app is ready:
```
pixlet check apps/{{appname}}/{{app_name}}.star
```

## Detailed Instructions

### 1. Fork the Tibyt Community repo on Github

- Community apps are published by making a Pull Request to the community repo here: https://github.com/tidbyt/community
- Start by forking the repo into your Github account.
- After forking you may want to checkout to a new branch to avoid any headaches, and to not have to merge off the main branch of your forked repo.

### 2. Clone the community repo to your local machine

### 3. Create your app

- Run `pixlet create` via the terminal

This should be run from the 'community' repo folder on your local machine.
You will be prompted for the relevant information about your app and the required files and folders will be generated.

```
$ pixlet create
Name (what do you want to call your app?): Tides
Summary (what's the short and sweet of what this app does?): Tide charts
Description (what's the long form of what this app does?): Daily tide charts for your location.
Author (your name or your Github handle): Mark Spicer
```

Please note:
- **Name:** The App Name can contain spaces but should not have any numbers
- **Summary:** This should be a VERY brief summary of what the app does. (27 characters or less!)
- **Description:** This is a longer description of what the app does.

#### Example App
In this example, the fields map as follows:
- **Name**: Fuzzy Clock
- **Summary**: Human readable time
- **Description**: Display the time in a groovy, human-readable way.
- **Author**: Max Timkovich

![example](img/example.png)

![details](img/example_details.png)


 #### Run your App

 Preview your App in your browser at http://localhost:8080/ by running:

```
pixlet serve apps/{{appname}}/{{app_name}}.star
```

#### Generate a Screenshot

You can generate an enlarged screen render by entering:

```
pixlet render apps/{{appname}}/{{app_name}}.star --gif --magnify 10
```

### 4. Making a PR

Before submitting your app, run `pixlet check apps/{{appname}}/{{app_name}}.star` to check your code for errors.

When you go to make a PR, give us a little background on what your app does. In addition, include a render from the following command so we can ooh-ahh 😍:
```
pixlet render apps/{{appname}}/{{app_name}}.star --gif --magnify 10
```






