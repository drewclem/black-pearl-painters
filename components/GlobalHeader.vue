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
  watch: {
    $route(to, from) {
      this.isOpen = false
    },
  },

  methods: {
    toggleNav: function () {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<template>
  <div class="p-3 md:flex flex-wrap justify-between items-center">
    <div class="flex md:w-1/3 md:block justify-between">
      <nuxt-link to="/">
        <img src="~/assets/images/bpp-header-logo.svg" alt="Black Pearl Painters company logo" class="w-3/4 md:w-5/6" />
      </nuxt-link>
      <button class="md:hidden" type="button" @click="toggleNav">
        <IconMenu class="w-10 h-10 text-gray-600" />
      </button>
    </div>

    <nav class="md:w-1/3 md:block text-xs lg:text-sm font-body">
      <transition name="slide" appear>
        <ul :class="isOpen ? 'block' : 'hidden'" class="md:flex justify-between text-right md:text-left">
          <li class="py-3 md:py-0 md:border-none border-b border-b-gray-100">
            <nuxt-link class="uppercase opacity-50 hover:opacity-100" to="/services">Services</nuxt-link>
          </li>
          <li class="py-3 md:py-0 md:border-none border-b border-b-gray-100">
            <nuxt-link class="uppercase opacity-50 hover:opacity-100" to="/about-us">About Us</nuxt-link>
          </li>
          <li class="py-3 md:py-0 md:border-none border-b border-b-gray-100">
            <nuxt-link class="uppercase opacity-50 hover:opacity-100" to="/get-in-touch">Get in touch</nuxt-link>
          </li>
          <li class="py-3 md:py-0 md:border-none border-b border-b-gray-100">
            <nuxt-link class="uppercase opacity-50 hover:opacity-100" to="/tips">Tips</nuxt-link>
          </li>
        </ul>
      </transition>
    </nav>

    <div class="relative hidden md:block">
      <div class="w-full flex flex-wrap justify-end items-center">
        <a href="tel:253-203-5355" class="hidden lg:block group">
          <IconPhone class="w-6 h-6 inline mr-2 text-gray-400" />
          <span class="text-xs"> (253) 203-5355 </span>
        </a>
        <a href="https://www.facebook.com/BlackPearlPainters/" class="hidden lg:block ml-6 mr-2">
          <IconFacebook class="w-6 h-6 text-gray-400 hover:text-gray-600" />
        </a>
        <button class="btn ml-6">
          <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
        </button>
      </div>
      <a href="https://onlineappintegration.enerbank.com/">
        <img
          src="~/assets/images/2022Banner_6Mo_SAC_HZ.png"
          alt="6 Months same as cash financing available."
          class="absolute w-56 right-0 mt-2"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
/* purgecss start ignore */
.nuxt-link-active {
  @apply opacity-100;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 150ms ease-in-out;
}

@media (min-width: 768px) {
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(100%) !important;
  }
}
/* purgecss end ignore */
</style>
