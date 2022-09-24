import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const cjsPlugins = [babel({
    babelHelpers: "runtime",
    exclude: /node_modules/,
    extensions: [".js",".jsx", ".ts", ".tsx"]
  }),],
  esmPlugins = [babel({
    babelHelpers: "runtime",
    exclude: /node_modules/,
    extensions: [".js",".jsx", ".ts", ".tsx"]
  }),resolve()],
  umdPlugins = [
    babel({
      babelHelpers: "runtime",
      exclude: /node_modules/,
      extensions: [".js",".jsx", ".ts", ".tsx"]
    }),
    resolve(),
  ];

export default [
  {
    input: "src/index.ts",
    output: {
      name: "ZRTC",
      dir: "dist",
      entryFileNames: "zrtc-electron-[hash].umd.js",
      format: "umd",
    },
    plugins: umdPlugins,
  },
];
