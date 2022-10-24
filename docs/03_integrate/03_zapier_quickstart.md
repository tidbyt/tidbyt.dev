# Zapier Quickstart
Tidbyt has a Zapier integration in Public Beta 🎉. This quickstart guide will 
get you up and running in a few minutes. If you have any feedback for the
process or our integration, let us know in
[the comments on Discuss](https://discuss.tidbyt.com/t/zapier-integration/50/15).

**Disclaimer**: We are offering this a Beta feature right now, it’s available
and free for anyone to use. Availability of this feature might change in the
future as we learn more about how it performs and how it’s being used.

## Setup
To get started, add Zapier to your Tidbyt using the Tidbyt mobile app. Don't
worry about setting any of the values, Zapier will take care of that in a later
step.

![zapier starlark](img/zapier_starlark.jpg)

## Create a Zap
Once the Zapier app has been setup on your Tidbyt, head over to
[Zapier](https://zapier.com)'s website and create a new Zap. Select a trigger of
your choice, for this quickstart, we'll use Slack with the `New Mention` event
type.

![zapier slack](img/zapier_slack.png)

Once your trigger test has succeeded, add the Tidbyt action and select the
`Send Notification` event type. This event will push updates to the Zapier app
on your Tidbyt with details about you latest Slack mention.

![zapier send notification](img/zapier_send_notification.png)

Login to your Tidbyt account and continue to setup your notification action.
Select your Tidbyt from the dropdown and the Zapier installation you installed
on your Tidbyt during the Setup step above.

![zapier action setup](img/zapier_action_setup.png)

Once selected, populate the Heading, Subheading, and Body text for your
notification. These fields will appear on your Tidbyt as following:

![zapier](img/zapier01.gif)

Under notification type, select Slack to use the Slack logo and
color scheme on your Tidbyt. It will now display like so:

![zapier slack](img/zapier02.gif)

We found these options to work nicely for slack:
![zapier notification options](img/zapier_notification_options.png)

Once configured, test your action and take a look at your Tidbyt! If all goes
well, you should see your latest Slack message appear on your Tidbyt 😎.
![zapier test action](img/zapier_test_action.png)

To wrap up, publish your action so that any new Slack mention will update the
Zapier app on your Tidbyt with the latest mention.

![zapier publish](img/zapier_publish.png)


## Feedback Wanted
Have any feedback for us? Let us know in
[the comments on Discuss](https://discuss.tidbyt.com/t/zapier-integration/50/15)
so we can improve on our Zapier integration.