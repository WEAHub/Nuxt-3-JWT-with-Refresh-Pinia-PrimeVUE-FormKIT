// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'

export default defineNuxtConfig({

  devtools: true,

  ssr: true,
  
  typescript: { typeCheck: true },

  imports: {
    dirs: [
      'stores/**',
      'composables/**',
      'utils/**',
    ],
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/nuxt',
    'nuxt-primevue',
  ],

  alias: {
    "server": resolve(__dirname, './server'),
    "models": resolve(__dirname, './server/models'),
    "types": resolve(__dirname, './types'),
    "stores": resolve(__dirname, './stores'),
    "composables": resolve(__dirname, './composables'),
  },

  css: [
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss',
    'primevue/resources/primevue.css',
    'primevue/resources/themes/arya-blue/theme.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'assets/style/main.scss',
  ],
  
  primevue: {
    options: {
      useFormkit: true,
      ripple: true
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 46800000000 // 3 years
    },
    debug: process.env.NODE_ENV !== 'production'
  },

  build: {
    transpile: [
      'primevue', 
      'jsonwebtoken'
    ]
  },

  runtimeConfig: {
    storeAuth: process.env.STORE_AUTH,
    jwtSecret: process.env.JWT_SECRET,
    accessTokenExpire: parseInt(process.env.ACCESS_TOKEN_EXPIRE!, 10),
    refreshTokenExpire: parseInt(process.env.REFRESH_TOKEN_EXPIRE!, 10), 
  }
})
