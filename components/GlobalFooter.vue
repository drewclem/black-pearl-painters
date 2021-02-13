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
          <a href="/">
            <p class="text-sm">
              <font-awesome-icon
                :icon="['fas', 'phone-alt']"
                class="text-gray-600 relative mr-2"
                style="top: 2px;"
              />(253) 203-5355
            </p>
          </a>
          <a href="https://www.facebook.com/BlackPearlPainters/" class="pt-1">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="ml-6 text-3xl opacity-50 hover:opacity-100 cursor-pointer transform hover:scale-105"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
}
</script>
