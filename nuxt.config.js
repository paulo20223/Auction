const production = process.env.NODE_ENV === 'production'

export default {
  ssr: false,
  target: 'static',
  srcDir: './src',

  generate: {
    dir: './dist'
  },
  router: {
    linkActiveClass: 'active-link'
  },

  head: {
    title: require('./package.json').title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'We markets NFT & DeFi.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }]
  },

  css: ['vuesax/dist/vuesax.css', '~assets/css/fonts.css'],

  plugins: [{ src: '~plugins/vuesax.ts', ssr: false }],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/axios', // api
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  styleResources: {
    scss: './src/assets/scss/utils/*.scss'
  },

  axios: {
    baseURL: (production ? '' : 'http://localhost:8007') + '/api/v1/'
  },

  build: {
    publicPath: production ? '/static/' : ''
  },

  watch: ['*']
}
