const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const sass = require('sass');

module.exports = {
  watch: true,
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
    })
  ]
};