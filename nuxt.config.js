const axios = require('axios')

const title = 'Black Pearl Painters'
const description =
  'Serving the upper North West with professional, affordable, & dependable interior and exterior services - including painting, carpentry, & siding, and more!'
const ogImage = 'https://www.blackpearlpainters.com/og-image.png'
const url = 'https://www.blackpearlpainters.com'

export default {
  target: 'static',
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    IS_PREVIEW: process.env.IS_PREVIEW,
  },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bpp-reverse-medallion.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap',
      },
    ],
    script: [
      {
        src: 'https://www.enhancify.com/paymentcalculatorwidget/',
        async: true,
        defer: true,
      },
    ],
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
  plugins: ['~/plugins/components.js', '~/plugins/formRoute.js'],
  generate: {
    cache: false,
    concurrency: 25,
    fallback: true,
    crawler: false,
    routes: function (callback) {
      const token = process.env.STORYBLOK_API_KEY

      const version = process.env.IS_PREVIEW ? 'draft' : 'published'
      let cacheVersion = 0

      const ignoreFiles = ['home', 'global']

      const routes = ['/']

      const getRoutes = async ignoreFiles => {
        axios.get(`https://api-us.storyblok.com/v2/cdn/spaces/me?token=${token}`).then(space_res => {
          // timestamp of latest publish
          cacheVersion = space_res.data.space.version
          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(`https://api-us.storyblok.com/v2/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`)
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!ignoreFiles.includes(res.data.links[key].slug)) {
                  if (!(res.data.links[key].is_folder && !res.data.links[key].is_startpage)) {
                    routes.push('/' + res.data.links[key].slug)
                  }
                }
              })

              console.log(routes)
              callback(null, routes)
            })
        })
      }

      getRoutes(ignoreFiles)

      return routes
    },
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt-2/module',
      {
        accessToken: process.env.STORYBLOK_API_KEY,
        apiOptions: {
          region: 'us',
        },
      },
    ],
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

  axios: {
    baseURL: '/',
  },

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
