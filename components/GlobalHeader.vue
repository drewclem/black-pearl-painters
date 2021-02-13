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
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="mt-2 md:hidden text-3xl text-gray-400 cursor-pointer"
        @click="toggleNav"
      />
    </div>

    <nav class="md:w-1/3 md:block text-xs lg:text-sm font-body">
      <ul :class="isOpen ? 'block' : 'hidden'" class="md:flex justify-between text-right md:text-left">
        <li
          class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
          :class="[currentPage.includes('services') ? activeClass : '']"
        >
          <nuxt-link to="/services">Services</nuxt-link>
        </li>
        <li
          class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
          :class="[currentPage.includes('about-us') ? activeClass : '']"
        >
          <nuxt-link to="/about-us">About Us</nuxt-link>
        </li>
        <li
          class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
          :class="[currentPage.includes('get-in-touch') ? activeClass : '']"
        >
          <nuxt-link to="/get-in-touch">Get in touch</nuxt-link>
        </li>
        <li
          class="uppercase opacity-50 hover:opacity-100 py-3 md:py-0 md:border-none border-b border-b-gray-100"
          :class="[currentPage.includes('gallery') ? activeClass : '']"
        >
          <nuxt-link to="/tips">Tips</nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="hidden md:flex w-1/3 flex-wrap justify-end items-center">
      <a href="/" class="hidden lg:block">
        <span class="text-xs">
          <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-gray-600 relative mr-2" style="top: 1px;" />(253)
          203-5355
        </span>
      </a>
      <a href="https://www.facebook.com/BlackPearlPainters/" class="pt-1 hidden lg:block">
        <font-awesome-icon
          :icon="['fab', 'facebook']"
          class="ml-6 text-2xl opacity-50 hover:opacity-100 cursor-pointer transform hover:scale-105"
        />
      </a>
      <button class="ml-6">
        <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',

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

<style scoped>
.active {
  opacity: 100%;
}
</style>
