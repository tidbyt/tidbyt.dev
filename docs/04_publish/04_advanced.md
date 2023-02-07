# Advanced features

To write really great apps, it's helpful to understand how Tidbyt
devices function, and how they interact with the backend where
community apps are running. There are a few advanced features that can
influence certain aspects of these interactions, which we'll cover here.

## Device side caching and `maxAge`

Tidbyt devices maintain a cache of the most recently received graphic
for each of its installed apps. This serves several purposes. First of
all, it allows the device to continue to display graphics during
intermittent network issues, including when the device is forced to
reconnect to the backend. Second, it eliminates the need to re-ship
graphics that have already reached the device, which reduces network
usage.

This mode of operation does come with a significant drawback: if new
graphics are unable to reach a device, the device may continue to
display older graphics even when these are out of date. An
illustrative example of this being problematic is the clock app. If
some sort of glitch is preventing up-to-date graphics to reach a
device, the clock will effectively be running behind.

To counter this, Tidbyt apps can optionally specify a `maxAge` on
their `Root` widget. When present, this field instructs Tidbyt devices
to discard the graphic when a certain amount of time has
passed. During normal operation, the backend will ship out replacement
graphics before this happens, but when that fails it is in some cases
preferable to not display anything at all, than to display stale data
that the user will assume is correct.

## App cycle speed and `show_full_animation`

Most users have multiple apps installed on their Tidbyts. By default,
each will be displayed for about 15 seconds, although this _app cycle
speed_ is user configurable. For apps that generate static, single
frame graphics, this is straightforward: the graphic is displayed for
exactly as long as the user has requestd. For apps that generate
animations, things get a little bit more tricky.

If an animation fits within the allotted time window, it will be
displayed as many times as possible, without truncating the
animation. For instance, if an animation is 7 seconds long, and the
app cycle speed allows for 15 seconds per app, then the animation will
be displayed twice for a total of 14 seconds. While a single second
remains of the time window, using to display a small piece of the
animation a third time will typically result in a jarring experience
for the user.

If an animation exceeds the time window, it will be truncated to
fit. This gives the user a predictable experience, where they know
roughly how long it'll take for the next app to appear. It also
prevents buggy apps from unintentially hijacking the display for long
periods of time.

In some cases, however, this behavior isn't ideal. For instance, an
app that displays quotes isn't all that useful if the quotes get
truncated halfway through. While one can argue that shorter quotes
should be used, this isn't always a reasonable solution. For such
cases, the `show_full_animation` field on the `Root` object can be
used to request that the device's app cycle speed is ignored, and that
the animation is shown in full.

It can be tempting to throw this setting on any old app, but we would
encourage developers to use some restraint. If the app can be
redesigned to fit all its data in a shorter animation, then that may
be preferable. If not, then `show_full_animation` may be the way to
go.
