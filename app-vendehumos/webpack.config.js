const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'] // it executes the loaders from right to left
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Curso de React',
      template: path.join(entryPath, 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: outputPath,
    port: 3000,
    open: true,
    historyApiFallback: true
  }
}