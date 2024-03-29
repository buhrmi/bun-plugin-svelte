import { plugin } from "bun";
import { compile } from "svelte/compiler";

plugin({
  name: "svelte-loader",
  setup(build) {
    // when a .svelte file is imported...
    build.onLoad({ filter: /\.svelte(\?.*)?$/ }, async (args) => {
      const searchParams = new URLSearchParams(args.path.split("?")[1]);
      const dom = searchParams.has("dom");
      const path = args.path.replace(/\?.*$/, '');
      
      // read and compile it with the Svelte compiler
      const file = await Bun.file(path).text();
      const result = compile(file, {
        filename: path,
        generate: dom ? "dom" : "ssr",
      })

      // and return the compiled source code as "js"
      return {
        contents: result.js.code,
        loader: "js",
      };
    });

  },
});