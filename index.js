import { plugin } from "bun";
import { compile } from "svelte/compiler";

plugin({
  name: "svelte-loader",
  setup(build) {
    // when a .svelte file is imported...
    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {

      // read and compile it with the Svelte compiler
      const file = await Bun.file(path).text();
      const result = compile(file, {
        filename: path,
        generate: "ssr",
      })

      // and return the compiled source code as "js"
      return {
        contents: result.js.code,
        loader: "js",
      };
    });

  },
});