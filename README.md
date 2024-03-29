# bun-plugin-svelte

This repo is supposed to serve as a starting point for a fully fledged Bun plugin for Svelte. 

At this point in time though, the only thing it can do is compile Svelte components for server-side rendering.

## Motivation

When tasked with adding Svelte to an existing plain nodejs app, we were faced with the problem that almost all ways to use Svelte components within node relied on some sort of preprocessor or bundler, which would transpile import statements like `import Component from './component.svelte' into something that nodejs would understand. However, adding a bundle step to an existing nodejs app isn't always desirable, especially when it worked well without bundling.

That's when we had the idea to just use Bun. Bun is a drop-in replacement for nodejs, which can be easily extended with plugins, to allow the import of file types, that usually have to be bundled or preprocessed in some way.

## Usage

Install the plugin with `bun add bun-plugin-svelte`, and then add `bun-plugin-svelte` to your bunfig.toml like this:

```
preload = ['bun-plugin-svelte']
```

Now you can import and use Svelte components inside of Bun:

```js
import MyComponent from './mycomponent.svelte'
const {html, css, head} = MyComponent.render()
```

## Currently working

- [x] Using Svelte components for server-side rendering
- [ ] Everything else
