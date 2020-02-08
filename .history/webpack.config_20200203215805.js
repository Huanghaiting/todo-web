const path = require('path');
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development';
const HTMLPlugin = require('html-webpack-plugin');

if (isDev) {
  // config.devtool = '#cheap-module-eval-source-map', // vue-devtools是一款基于chrome游览器的插件，用于调试vue应用
  config.devServer = {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
        errors: true,
      },
      hot: true, // 当修改一个组件时只修改当前的部分，不需要修改整个页面 
    },
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(), // 作用：HMR插件将HMR Runtime代码嵌入到bundle中，能够操作APP代码，完成代码替换
      new webpack.NoEmitOnErrorsPlugin() // 作用：跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
    )

}

module.exports = {
  target: 'web',
  //入口， __dirname 是当前文件所在目录
  entry: path.join(__dirname, 'src/index.js'),
  //输出
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    // 这里定义在js中可以引用用于判断当前开发环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
  ],

  //webpack原生只支持js文件类型，只支持ES5语法，我们使用以.vue文件名结尾的文件时，需要为其指定loader
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      //将css写入到HTML
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },

    ]
  }
}