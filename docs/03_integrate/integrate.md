# Integrate

Low resolution applications are of course wonderful in their own
right, but they're even better when you've pushed them to your Tidbyt!
In this chapter, we'll cover how to do that (and more) using the
Tidbyt API.

## Pixlet Push

Let's say you've [built](../build/getting-started) a beautiful bitcoin
tracker located in `examples/bitcoin.star`. You can easily render this
to a webp image using pixlet:

`pixlet render examples/bitcoin.star`

To get the resulting webp displayed on your Tidbyt, you need two
pieces of information: your _Device ID_ and your _API Token_. Both of
these can be found in the Tidbyt smartphone app under Settings >
General > Get API Key. The Device ID uniquely identifies your device,
and the API Token demonstrates that you are authorized to control the
device.

**NOTE*:* Anyone who has access to your API Token will be able to
control your device, so be careful sharing it!

To "push" the Bitcoin graphic to your Tidbyt, run:

`pixlet push --api-token "<API TOKEN>" "<DEVICE ID>" examples/bitcoin.webp`

If all goes well, you should see the Bitcoin tracker appear on your Tidbyt:

![Tidbyt device displaying a Bitcoin tracker](img/tidbyt_2.jpg)

After a couple of seconds, your Tidbyt will go back to it's regular
rotation of apps on display.

## Apps and Installations

Tidbyt comes with a ton of apps out of the box, and you've likely
added a number of them to your Tidbyt already. Each time an app is
added, an _"installation"_ object is created. This is essentially a
record in Tidbyt's database saying "this app is to be run for this
device, using these configuration options". The device will rotate
between displaying installations one at a time.

When pushing a graphic, you can instruct Pixlet to create an
installation for you:

`pixlet push --installation-id bitcoin --api-token "<API TOKEN>" "<DEVICE ID>" examples/bitcoin.webp`

This means the graphic will enter the regular rotation of apps, and
become visible among them in the Tidbyt iOS/Android app. In the
screenshot below, you'll see the pushed bitcoin installation on the
right hand side.

![A pushed installation alongside a regular installation in the Tidbyt smartphone app.](img/integrate_pushed_installation.png)

Keep in mind though, the graphic associated with the installation will
only change if you push a new one. If you really want to stay up to
speed on the price of Bitcoin, you'll have to either keep pushing the
graphic, or look into [publishing your
app](../04_publish/publish.md). =)

## The Tidbyt API

Behind the scenes, the `pixlet push` command reaches out to Tidbyt's
servers via the Tidbyt API. But pushing graphics isn't all the API is
good for. For instance, try the following in your terminal (requires
you have `curl` installed):

`curl "https://api.tidbyt.com/v0/apps"`

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
about them all in the [API Reference](). Most of them require passing
in an API Token, so here's an example of how that works.

`curl -H "Authorization: Bearer <API Token HERE>" https://api.tidbyt.com/v0/devices/<Device ID HERE>`

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
autentication!

That's pretty much all there's too it. Now go forth and build a thing!
