# Authoring Apps
If you haven't already, check out the [tutorial](tutorial.md) for how to get started writing apps. This guide picks up where the tutorial leaves off and provides practices and philosophy on how to build apps using pixlet.

## Architecture
Pixlet is heavily influenced by the way Tidbyt devices work. The Tidbyt displays tiny 64x32 animations and images. It keeps a local cache of the apps that are installed on it.

Each Tidbyt regularly sends heartbeats to the Tidbyt cloud, announcing what it has cached. The Tidbyt cloud decides which app needs to be rendered next, and executes the appropriate Starlark script. It encodes the result as a [WebP](https://developers.google.com/speed/webp) image, and sends it back to the device.

To mimic how we host apps internally, `pixlet render` executes the Starlark script and `pixlet push` pushes the resulting WebP to your Tidbyt.

## Config
```python
def main(config):
    who = config.get("who")
    print("Hello, %s" % who)
```