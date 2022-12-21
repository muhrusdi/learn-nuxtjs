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
    customVariables: ['./styles/variables.scss'],
    optionsPath: './plugins/vuetify.js'
  },
  css: [
    './styles/global.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios'
  ],
  plugins: [
    { src: './plugins/vuelidate.js' },
    './plugins/axios.js'
  ],
  axios: { proxy: true },
  proxy: {
    '/custom/': {
      target: process.env.API_BASE_URL,
      pathRewrite: { '^/custom/': '/api/v1/' },
    },
  },
  env: {
    baseUrl: process.env.BASE_URL
  }
}