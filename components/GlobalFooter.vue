<template>
  <div>
    <section class="container mx-auto text-center px-4 mb-12">
      <h2 class="text-xl md:text-3xl mb-2"><span class="text-gray-600">Ready to</span> Get Started?</h2>
      <p class="font-body text-gray-600 mb-4">
        Click the button below to request a free quote - Or call us at
        <a href="tel:2532035335" class="font-semibold">(253) 203-5335</a> for a free consultation.
      </p>

      <div class="flex items-center space-x-6 justify-center">
        <div>
          <button class="btn">
            <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
          </button>
        </div>

        <a href="https://onlineappintegration.enerbank.com/">
          <img
            src="~/assets/images/2022Banner_6Mo_SAC_HZ.png"
            alt="6 Months same as cash financing available."
            class="w-64"
          />
        </a>
      </div>
    </section>
    <footer class="py-10 px-4">
      <div class="container mx-auto md:flex items-center">
        <nav class="text-xs md:w-1/3 mb-4 md:mb-0">
          <ul class="flex justify-between">
            <li v-for="item in footerNavigation" :key="item._uid" class="uppercase pr-2 text-gray-500 hover:text-gray-900">
              <nuxt-link :to="$formRoute({url: item.link.cached_url})">{{ item.label }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="md:w-1/3 mb-4 md:mb-0">
          <nuxt-link to="/">
            <img
              :src="footerLogo.filename"
              alt="Black Pearl Painters logo"
              class="w-5/12 mx-auto"
            />
          </nuxt-link>
        </div>

        <div class="flex justify-center md:justify-end md:w-1/3 items-center">
          <a href="/" class="hidden lg:block group">
            <IconPhone class="w-6 h-6 inline mr-2 text-gray-400" />
            <span class="text-xs"> (253) 203-5355 </span>
          </a>
          <a href="https://www.facebook.com/BlackPearlPainters/" class="hidden lg:block ml-6 mr-2">
            <IconFacebook class="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IconPhone from '@/assets/images/icons/icon-phone.svg?inline'
import IconFacebook from '@/assets/images/icons/icon-facebook.svg?inline'

export default {
  name: 'GlobalFooter',
  components: {
    IconPhone,
    IconFacebook,
  },
  computed: {
    ...mapState('global', ['footerLogo', 'footerNavigation'])
  }
}
</script>
