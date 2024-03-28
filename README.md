# bun-plugin-svelte

This repo is supposed to serve as a starting point for a fully fledged Bun plugin for Svelte. 

At this point in time though, the only thing it can do is compile Svelte components for server-side rendering.

## Usage

Install the plugin with `bun add bun-plugin-svelte`, and then add `bun-plugin-svelte` to your bunfig.toml like this:

```
preload = ['bun-plugin-svelte']
```

Now you can import and use Svelte components inside of Bun:

```
import MyComponent from './mycomponent.svelte'
const {html, css, head} = MyComponent.render()
```

## Features

- [x] Use Svelte components for server-side rendering
- [ ] Everything else
