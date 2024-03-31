# bun-plugin-svelte

This repo is supposed to serve as a starting point for a fully fledged Bun plugin for Svelte. 

At this point in time though, the only thing it can do is compile Svelte components. No configurations, preprocessors, etc.

## Motivation

When tasked with adding Svelte to an existing plain nodejs app, we were faced with the problem that almost all ways to use Svelte components within node relied on some sort of preprocessor or bundler, which would transpile import statements like `import Component from './component.svelte'` into something that nodejs could understand. However, adding a bundle step to an existing nodejs app isn't always desirable, especially when it worked well without bundling, and you don't want to burden your coworkers with additional steps.

That's when we had the idea to just use Bun. Bun is a drop-in replacement for nodejs, which can be easily extended with plugins, to allow the import of file types that usually have to be bundled or preprocessed in some way.

## Usage

Install the plugin with `bun add bun-plugin-svelte`, and then add `bun-plugin-svelte` to your bunfig.toml like this:

```
preload = ['bun-plugin-svelte']
```

Now you can import and use Svelte components inside of your .js/.ts code. No bundling required. By default, bun-plugin-svelte will compile a component with a `render` method suitable for server-side rendering. To compile a component to be mounted to the DOM inside a browser, append `?dom` to the filename.

SSR:

```js
import MyComponent from './mycomponent.svelte'
const {html, css, head} = MyComponent.render()

```

Browser:

```js
import MyComponent from './mycomponent.svelte?dom'
new MyComponent({target: document.body})

```

## Currently working

- [x] Compile Svelte Components
- [ ] Everything else
