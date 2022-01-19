const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, '/src/styles/variables.less')
      ]
    }
  },
  // 这个是给webpack-dev-server开启可以IP和域名访问权限
  chainWebpack: config => {
    config.devServer.disableHostCheck(true)
  }
}
