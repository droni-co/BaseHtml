const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./*.html", to: "./", context: "src/" },
        { from: "./assets/**/*", to: "./", context: "src/" },
        {
          context: "src/",
          from: './scss/app.scss',
          to: './css/app.css',
          transform: (content, path) => {
            return sass.compile(path).css
          },
        }
      ],
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};