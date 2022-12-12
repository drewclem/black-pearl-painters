const title = 'Black Pearl Painters'
const description =
  'Serving the upper North West with professional, affordable, & dependable interior and exterior services - including painting, carpentry, & siding, and more!'
const ogImage = 'https://www.blackpearlpainters.com/og-image.png'
const url = 'https://www.blackpearlpainters.com'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Black Pearl Painters',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Black Pearl Painters' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.blackpearlpainters.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: url,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ogImage,
      },
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
        key: process.env.MAPS_API_KEY,
      },
    ],
    'nuxt-fontawesome',
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
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
