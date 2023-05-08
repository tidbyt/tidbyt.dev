# Frequently Asked Questions

## Why is the formatter so opinionated?
We know the linter can be annoying. First off, we're sorry it's annoying! But it's in place for good reasons. On the technical front, Starlark is a language with syntactically significant whitespace. That means if the indentation is incorrect, it could change the meaning of your code 🙀. On the practical side, Tidbyt engineers often need to make minor modifications to apps in the Community repo. Our editors format Starlark automatically on save using the [Bazel plugin](https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel) for VSCode, which means one small change could auto format your entire app and look like a much bigger change!

The good news is you can fix formatting errors automatically! To automatically fix format issues, run the following:
```
pixlet format
```

## When will my app be available in the Tidbyt mobile app?
When new apps are merged in the community repo, it gets released to all users immediately using a [CI process](https://github.com/tidbyt/community/actions/workflows/main.yml). New apps get announced using the #new-apps channel on Discord.

If you're not sure where your app is in the release process, feel free to ping `@TIDBYT` on Discord!