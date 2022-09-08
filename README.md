# Tidbyt | Dev
[![Netlify Status](https://api.netlify.com/api/v1/badges/fd7e22f8-e8c9-4caa-ab53-37474eb49bc4/deploy-status)](https://app.netlify.com/sites/tidbyt-dev/deploys)

Welcome to the source for [tidbyt.dev](https://tidbyt.dev) 🎉. This repo contains a [React](https://reactjs.org/) project that converts a tree of [GitHub Flavored Markdown](https://github.github.com/gfm/) into our custom documentation site.

# Editing Documentation
All docs are available in the `docs/` directory of this project. Any file with a `.md` extension will be available on the published docs site. As a rule of thumb, markdown should render properly through GitHub web, VSCode, and any other popular markdown editor. If markdown displays properly through the GitHub web viewer, it should display properly on our site.

## Syntax
Everything supported in the [GitHub Flavored Markdown](https://github.github.com/gfm/) spec is available on  [tidbyt.dev](https://tidbyt.dev). If something is supported in the specification but not on our site, it should be considered a bug. If our site does more then the spec, the feature should be considered experimental and could go away at any time. Most notably, we allow some of the [disallowed raw HTML](https://github.github.com/gfm/#disallowed-raw-html-extension-) tags but these may not be supported indefinitely.

## Ordering
To ensure the order of your documentation appears as expected, prefix a directory or document using two digits. For example `docs/01_foo/02_bar.md` to ensure both the directory and the document are ordered relative to the other directories and documents.

## Links
Links to other markdown files will be converted automatically for you. For example, in `docs/foo/foo.md`, you could like to `docs/bar/bar.md` as follows:
```
[check out bar](../bar/bar.md)
```

As another example, in `docs/foo/foo.md`, you could link to `docs/foo/bar.md` using relative links:
```
[check out bar](./bar.md)
```

As mentioned, if the links work in VSCode and GitHub, they should work on our documentation site out of the box.

## Assets
Assets belong in the `docs/img` directory. All of the relative linking works as expected. If you can link to an image and it displays on GitHub, it should show up properly on our documentation site. 

# Developing
You shouldn't need to run the site if you simply want to edit the documentation, although you could if you want to be sure it works as expected. Check out the details below.

## Local Development
First, install dependencies:
```
npm i
```

Next, run the site:
```
npm run start
```

You should be able to reach the web address in your browser: http://localhost:3000/

## Production
This site is deployed using [Netlify](https://www.netlify.com/). It runs the following to build the production site:
```
npm run build
```

## Profile
The build supports profiling using the following command:
```
npm run profile
```
Once complete, upload the output here for a visualization: https://chrisbateman.github.io/webpack-visualizer/