# Building Integrations

Behind the scenes, the `pixlet push` command reaches out to Tidbyt's
servers via the Tidbyt API. But pushing graphics isn't all the API is
good for. For instance, try the following in your terminal (requires
you have `curl` installed):

```
curl "https://api.tidbyt.com/v0/apps"
```

You should see a long list of all the available Tidbyt apps. It'll
look something like this:

```
{
  "apps": [
    {
      "id": "nationaltoday",
      "name": "NationalToday",
      "description": "Displays today's holidays from NationalToday."
    },
    {
      "id": "date-progress",
      "name": "Date Progress",
      "description": "Shows todays date as colorful progressbars, you can show the progress of the current day, month and year."
    },
...
```

There are several endpoints available in the API, and you can read
about them all in the [API Reference](api). Most of them require passing
in an API Token, so here's an example of how that works.

```
curl -H "Authorization: Bearer <API Token HERE>" https://api.tidbyt.com/v0/devices/<Device ID HERE>
```

In return, you should get a json object with information about your device. It'll look something like this:

```
{
  "id": "<Device ID>",
  "displayName": "My Tidbyt",
  "brightness": 20,
  "autoDim": false
}
```

The key component of that command line is the `-H` flag. Make sure to
included when performing requests to endpoints that require
authentication!

That's pretty much all there's too it. Now go forth and build a thing!
