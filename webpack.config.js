const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'})
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}, 'css-loader']},
      {test: /\.(sass|scss)$/, use: [{loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}, 'css-loader', 'sass-loader']},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
