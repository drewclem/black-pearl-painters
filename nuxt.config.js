export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Black Pearl Painters' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Black Pearl Painters' || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/bpp-reverse-medallion.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/svg',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyCeiGjIJUONCkYkhHY-NfCOwmleHZl75CI',
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
