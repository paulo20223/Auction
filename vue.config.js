const isProd = process.env.NODE_ENV === 'production'
const FRONT_PORT = parseInt(process.env.VUE_APP_DEV_PORT)
const FRONT_NAME = require('./package.json').title

module.exports = {
  publicPath: isProd ? '/static' : 'http://localhost:8033/',
  outputDir: './dist',
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.devServer.host = 'http://localhost'
    config.devServer.port(FRONT_PORT).historyApiFallback(true)

    config.plugin('html').tap((args) => {
      args[0].title = FRONT_NAME
      return args
    })
    config.devServer.watchOptions.poll = true
  },

  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  transpileDependencies: ['vuex-module-decorators', 'vue-my-toasts']
}
