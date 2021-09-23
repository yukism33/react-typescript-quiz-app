const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: ['.ts', '.js', '.tsx'], // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
  stats: {
    children: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
