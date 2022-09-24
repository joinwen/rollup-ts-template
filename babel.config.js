const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      regenerators: true,
      corejs: 3,
      helpers: true
    }
  ]
];
module.exports = {
  presets: [
      [
      "@babel/preset-env",
      {
        useBuiltIns: false
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins
}