const path = require('path');

module.exports = {
  entry: {
    export: './src/index.js'
  },
  mode: 'production',
  devServer: {
    static: './dist',
    port: 3000
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    library: {
      name: 'ExpoetTable',
      type: 'umd'
    },
    clean: true,
    globalObject: 'globalThis'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}