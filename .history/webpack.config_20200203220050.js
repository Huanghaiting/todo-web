// 该文件是给我们打包前端资源
// node.js 的基本包，path 模块提供用于处理文件路径和目录路径的实用工具
const path = require('path')
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
      test: /.vue$/,
      loader: 'vue-loader'
    }]
  }
}