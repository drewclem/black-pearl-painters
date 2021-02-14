<script>
import IconPhone from '@/assets/images/icons/icon-phone.svg?inline'
import IconFacebook from '@/assets/images/icons/icon-facebook.svg?inline'
import IconMenu from '@/assets/images/icons/icon-menu.svg?inline'

export default {
  name: 'GlobalHeader',
  components: {
    IconPhone,
    IconFacebook,
    IconMenu,
  },

  data() {
    return {
      isOpen: false,
      activeClass: 'active',
    }
  },

  computed: {
    currentPage() {
      return this.$route.path
    },
  },

  methods: {
    toggleNav: function() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<template>
  <div class="p-3 md:flex flex-wrap justify-between items-center">
    <div class="flex md:w-1/3 md:block justify-between">
      <nuxt-link to="/">
        <img
          src="~/assets/images/bpp-header-logo.svg"
          alt="Black Pearl Painters company logo"
          class="w-3/4 md:w-7/12"
        />
      </nuxt-link>
      <button class="md:hidden" type="button" @click="toggleNav">
        <IconMenu class="w-10 h-10 text-gray-600" />
      </button>
    </div>

    <nav class="md:w-1/3 md:block text-xs lg:text-sm font-body">
      <ul :class="isOpen ? 'block' : 'hidden'" class="md:flex justify-between text-right md:text-left">
        <li>
          <nuxt-link
            class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
            to="/services"
            >Services</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
            to="/about-us"
            >About Us</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
            to="/get-in-touch"
            >Get in touch</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
            to="/tips"
            >Tips</nuxt-link
          >
        </li>
      </ul>
    </nav>

    <div class="hidden md:flex w-1/3 flex-wrap justify-end items-center">
      <a href="/" class="hidden lg:block group">
        <IconPhone class="w-6 h-6 inline mr-2 text-gray-400" />
        <span class="text-xs">
          (253) 203-5355
        </span>
      </a>
      <a href="https://www.facebook.com/BlackPearlPainters/" class="hidden lg:block ml-6 mr-2">
        <IconFacebook class="w-6 h-6 text-gray-400 hover:text-gray-600" />
      </a>
      <button class="btn ml-6">
        <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* purgecss start ignore */
.nuxt-link-active {
  @apply opacity-100;
}
/* purgecss end ignore */
</style>
