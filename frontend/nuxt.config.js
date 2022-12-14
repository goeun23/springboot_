import pkg from './package'

export default {

  generate: {
    dir: 'target/dist'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true,
    debug: true
  },

  proxy: {
    // See https://axios.nuxtjs.org/options, https://github.com/nuxt-community/proxy-module
    '/api': {
      target: 'http://localhost:8080'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: null,
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here   extend(config, ctx) {
    }
    */

  }
}
