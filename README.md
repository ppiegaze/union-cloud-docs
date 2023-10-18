# Union Cloud Documentation

This repository contains the content for the public documentation of Union Cloud.

The site is rendered using the [VitePress](https://vitepress.dev) framework to generate static content from Markdown files.

VitePress is built on top of modern JavaScript tooling including [Vue.js](https://vuejs.org) and [Vite](https://vitejs.dev).

##  Environment Setup
Instructions are intended for use on macOS, ensure you have Homebrew installed first.
These instructions are for [bun](https://bun.sh/) which is a drop-in replacement for Node.
If you want to use standard Node, adjust the instructions below accordingly.

```
brew tap oven-sh/bun
brew install bun
```

## Running the site locally
VitePress can run in a mode that automatically refreshes your browser as you edit the docs.

```
bun run docs:dev
```

## Building the docs
To build the docs as static HTML, run:

```
bun run docs:build
```
