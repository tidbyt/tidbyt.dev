# A Clock App

This applet accepts a `timezone` parameter and produces a two frame
animation displaying the current time with a blinking ':' separator
between the hour and minute components.

```starlark
load("render.star", "render")
load("time.star", "time")

def main(config):
    timezone = config.get("timezone") or "America/New_York"
    now = time.now().in_location(timezone)

    return render.Root(
        delay = 500,
        child = render.Box(
            child = render.Animation(
                children = [
                    render.Text(
                        content = now.format("3:04 PM"),
                        font = "6x13",
                    ),
                    render.Text(
                        content = now.format("3 04 PM"),
                        font = "6x13",
                    ),
                ],
            ),
        ),
    )
```

Here's the resulting image:

![](img/clock.gif)