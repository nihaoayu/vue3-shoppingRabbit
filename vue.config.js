const path = require('path')
module.exports = {
  lintOnSave: true,

  devServer: {
    open: true,
    port: 8080
  },
  // 这个是给webpack-dev-server开启可以IP和域名访问权限
  chainWebpack: config => {
    config.devServer.disableHostCheck(true)
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, '/src/styles/variables.less')
      ]
    }
  }
}
