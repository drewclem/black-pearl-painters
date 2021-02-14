<script>
import IconPhone from '@/assets/images/icons/icon-phone.svg?inline'
import IconFacebook from '@/assets/images/icons/icon-facebook.svg?inline'

export default {
  name: 'GlobalFooter',
  components: {
    IconPhone,
    IconFacebook,
  },
}
</script>

<template>
  <div>
    <footer class="py-10 px-4">
      <div class="container mx-auto md:flex items-center">
        <nav class="text-xs md:w-1/3 mb-4 md:mb-0">
          <ul class="flex justify-between">
            <li class="uppercase pr-2 text-gray-500 hover:text-gray-900">
              <nuxt-link to="/services">Services</nuxt-link>
            </li>
            <li class="uppercase pr-2 text-gray-500 hover:text-gray-900">
              <nuxt-link to="/about-us">About Us</nuxt-link>
            </li>
            <li class="uppercase text-gray-500 hover:text-gray-900">
              <nuxt-link to="/get-in-touch">Get in touch</nuxt-link>
            </li>
            <li class="uppercase pr-2 text-gray-500 hover:text-gray-900">
              <nuxt-link to="/tips">Tips</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="md:w-1/3 mb-4 md:mb-0">
          <nuxt-link to="/">
            <img
              src="~/assets/images/bpp-reverse-medallion.svg"
              alt="Black Pearl Painters logo"
              class="w-5/12 mx-auto"
            />
          </nuxt-link>
        </div>

        <div class="flex justify-center md:justify-end md:w-1/3 items-center">
          <a href="/" class="hidden lg:block group">
            <IconPhone class="w-6 h-6 inline mr-2 text-gray-400" />
            <span class="text-xs">
              (253) 203-5355
            </span>
          </a>
          <a href="https://www.facebook.com/BlackPearlPainters/" class="hidden lg:block ml-6 mr-2">
            <IconFacebook class="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
