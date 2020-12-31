const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const util = require("./util");

module.exports = {
  entry: {
    main: util.getEntryMain(),
  },
  output: {
    filename: "asm-register.js",
    path: util.getOutputPath(),
    library: "AsmRegister",
    libraryTarget: "umd",
    globalObject: "this",
  },

  rules: [
    {
      test: /\.tsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "ts-loader",
      },
    },
  ],
  resolve: {
    // 导入此类文件时，不用添加文件后缀
    extensions: [".tsx", ".ts", ".js"],

    // 如果要配置路径别名，就在/tsconfig.json里面配置
    alias: {
      ...util.parseTsConfigPaths(),
    },
  },

  // 优化: https://webpack.js.org/configuration/optimization/
  optimization: {},

  // 插件: https://webpack.js.org/configuration/plugins/#plugins
  plugins: [
    new CleanWebpackPlugin(),
  ],

  // 实验性支持: https://webpack.js.org/configuration/experiments/
  experiments: {
    topLevelAwait: true,
  },
};
