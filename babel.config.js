module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["/."],
          extensions: [".tsx"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            types: "./src/types",
          },
        },
      ],
    ],
  }
}
