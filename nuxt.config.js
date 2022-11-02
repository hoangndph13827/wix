const { resolve } = require('path')
module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [
    { handler: require('nuxt-scss-to-js') }
  ],
  nuxtScssToJs: {
    generate: true
  }
}
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wix',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // // Simple usage
    // 'nuxt-scss-to-js',
    // {
    //   generate: true,
    //   namespace: 'variables'
    // }
    // // With options
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  
  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ],
      presets(env, [ preset, options ]) {
        return [
          [ "@babel/preset-env", options ]
        ]
      }
    }
  }
}
