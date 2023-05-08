# Community Apps

Did you know that the vast majority of Tidbyt apps are contributed by
other users and community members? When you browse the Tidbyt
iOS/Android app for new content to add to your Tidbyt, you'll notice
that plenty of them have an attribution given like in the example
below. These are all community contributed apps.

![A community contributed app as seen in Tidbyt's Android app](img/publish_attribution_phase_pf_moon.png)


## How to contribute

The community apps can be found in our public github repository over
at
[github.com/tidbyt/community/](https://github.com/tidbyt/community/). It's
all Free and Open Source Software, so you're welcome to borrow ideas,
code and design from other apps as you see fit. The community repo is
a great place to learn more about how to write code for your own
Tidbyt.

Should you decide to share what you've developed - and we certainly
encourage you to - then the community repo is where it happens.

### The process

To get a new app published, you need to submit a Pull Request for it
to be merged into the main branch of the community repo. This requires
some reviewing from Tidbyt employees (and often other community
developers) to make sure it's up to snuff.

Once a new app is merged, it will be publicly available to everyone via search.
Tidbyt employees will manually categorize apps on the explore page. Which apps
make it into the explore page is an editorial decision by our team. We do take
suggestions, though ultimately how we editorialize apps is up to the discretion
of the Tidbyt team.

For the nitty gritty on how to get a new app published, check out
[Publishing Apps](./02_publishing_apps.md)

### How to pass a review

During PR reviews, we'll be looking to make sure that the app is
working as intended, doesn't cause any harm and is at least somewhat
useful. But don't worry too much about the useful part; we've plenty
of room for fun and silly apps too!

Apps added to this repo will be available to everyone. We love niche
use cases and encourage them. But if the app is only for you, the
author, then we likely will not be able to support it. Your app
doesn't have to be popular, but there in theory should be more users
than just you.

Here's what we're usually looking for when reviewing a PR:

- Does the app work as intended?
- Can we expect the app to work reliably over time?
- Is the app handling user data responsibly?
- Is the app caching in an appropriate manner?
- If an external API is being used, is the app taking care to keep
  request rates at a reasonable level?

And of course, it goes without saying that we're not going to merge
hateful, mean-spirited or otherwise inappropriate content.

## Supporting your app

At the end of the day, Tidbyt employees will be the ones who will have
to resolve production issues and respond to support emails. This means
a few things:

Apps need to use a stable API:
- An API hosted on your home network simply won't do
- Any failures will surface in our monitoring tools and alert our oncalls

Apps published should be stable:
- If there are bugs, we will make changes quickly and will likely not wait for your review
- If they are unresolvable, we may have to pull the app from our inventory until we get ahold of you

We want you, the contributor, to own the product direction of the apps
you contribute. If others want to contribute features or
modifications, we encourage it! However, we will want your input on
the pull request and will wait a week or so to hear back from you
before we merge the change. If you're MIA and there is strong interest
in the change, we will merge it and won't wait up on you forever. See
modifying apps for more.
