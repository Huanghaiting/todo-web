// 该文件是给我们打包前端资源
// node.js 的基本包，path 模块提供用于处理文件路径和目录路径的实用工具
const path = require('path')
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 绝对路径 输入
  entry: path.join(__dirname, 'src/index.js'),
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
        }, ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }, ],
      }
    ]
  },
  plugins: [
    //请确保引入这个插件！是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
    new VueLoaderPlugin()
  ]
}