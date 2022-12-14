import { join } from "path"

export default {
  babel:{
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/preset-env', { loose: false }],
    ]
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-pxtorem': {
          propList: ['*', '!border*']
        }
      }
    }
  },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    optionsPath: './plugins/vuetify.js'
  },
  css: [
    './styles/global.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    { src: './plugins/vuelidate.js' }
  ]
}