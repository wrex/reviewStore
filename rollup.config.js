import typescript from "@rollup/plugin-typescript";
import metablock from "rollup-plugin-userscript-metablock";

const production = !process.env.ROLLUP_WATCH;
import pkg from "./package.json";

export default [
  {
    input: "./src/main.ts",
    output: [
      {
        file: "dist/bundle.user.js",
        name: "reviewstore",
        format: "iife",
        sourcemap: production ? false : "inline",
      },
      {
        file: "dist/bundle.min.mjs",
        format: "es",
        sourcemap: production ? false : "inline",
      },
    ],
    plugins: [
      typescript(),
      metablock({
        file: "./meta.json",
        override: {
          name: pkg.name,
          version: pkg.version,
          description: pkg.description,
          homepage: pkg.homepage,
          author: pkg.author,
          license: pkg.license,
        },
      }),
    ],
  },
];
