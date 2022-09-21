# Build for Tidbyt 

To build apps for Tidbyt, use [Pixlet](./02_installing_pixlet.md). Apps developed with
Pixlet can be served in a browser or pushed to a physical Tidbyt device.

![Example of a Tidbyt](img/tidbyt_1.png)


## Requirements
* You've installed [Pixlet](./02_installing_pixlet.md).
* You are familiar with using a terminal.

## Hello, World!

Pixlet applets are written in a simple, Python-like language called
Starlark. Here's the venerable Hello World program:

```starlark
load("render.star", "render")

def main():
    return render.Root(
        child = render.Text("Hello, World!")
    )
```

Copy the code above and save it as `hello_world.star`. Run it with the
`pixlet serve` command:

```console
pixlet serve hello_world.star
```

You can view the result by navigating to [http://localhost:8080][3]:

![](img/hello_world.png)

[3]: http://localhost:8080

### Push to a Tidbyt

If you have a Tidbyt, `pixlet` can push apps directly to it:

```console
pixlet render hello_world.star
pixlet push --api-token <YOUR API TOKEN> <YOUR DEVICE ID> \
    hello_world.webp
```

To get the ID and API key for a device, open the settings for the device in the Tidbyt app on your phone, and tap **Get API key**.

### How it works

Pixlet scripts are written in a simple, Python-like language called
[Starlark](https://github.com/google/starlark-go/). The scripts can
retrieve data over HTTP, transform it and use a collection of
_Widgets_ to describe how the data should be presented visually.

The Pixlet CLI runs these scripts and renders the result as a WebP
or GIF animation. You can view the animation in your browser, save
it, or even push it to a Tidbyt device with `pixlet push`.

## What's next?

* Read the [in-depth tutorial on building a more advanced app](./15_crypto-tracker.md).
* See our [best practices for authoring apps](./05_authoring_apps.md).
* Check out the references for the [**widgets**](../05_reference/widgets.md)
  and [**modules**](../05_reference/modules.md) you can use in.
* Learn about [fonts you can use in Pixlet apps](./07_fonts_in_pixlet.md).

### Publish your app

Once you've got an app that's looking spiffy, you can
[publish and share it with the community](../04_publish/publish.md).