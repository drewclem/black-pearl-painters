<template>
  <header class="z-50 p-3 md:flex flex-wrap justify-between items-center">
    <div class="flex lg:w-1/4 md:block justify-between">
      <nuxt-link to="/">
        <img v-if="headerLogo" :src="headerLogo.filename" alt="Black Pearl Painters company logo" class="w-3/4" />
      </nuxt-link>
      <button class="md:hidden" type="button" @click="toggleNav">
        <IconMenu class="w-10 h-10 text-gray-600" />
      </button>
    </div>

    <div class="md:hidden">
      <div
        :class="`mobile z-[52] fixed inset-0 bg-black transition duration-150 ${
          isMobileMenuOpen ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'
        }`"
      >
        <div
          :class="`flex transform transition-transform duration-150 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`"
        >
          <div>
            <button
              class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
              ref="closeButtonRef"
              @click="toggleNav"
              type="button"
            >
              <span class="sr-only">Close menu</span>
              <IconClose class="w-6 h-6 text-primary-default" file="close-icon" alt="Close Menu" />
            </button>
          </div>

          <div class="flex flex-col justify-between h-screen w-full bg-white">
            <nav>
              <ul>
                <li v-for="menu in headerNavigation" class="p-4 border-b border-gray-100" :key="menu._uid">
                  <nuxt-link v-if="menu.link" :to="$formRoute({ url: menu.link.cached_url })" class="uppercase">{{
                    menu.label
                  }}</nuxt-link>

                  <div v-else>
                    <MobileSubmenu :menu="menu" :isParentOpen="isMobileMenuOpen" />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute left-0 right-0 w-full hidden md:block">
      <nav class="md:block text-xs lg:text-sm font-body mx-auto">
        <ul class="md:flex space-x-8 text-right md:text-left justify-center">
          <li
            v-for="menu in headerNavigation"
            :key="menu._uid"
            class="py-3 md:py-0 md:border-none border-b border-b-gray-100"
          >
            <nuxt-link
              v-if="menu.link"
              class="uppercase opacity-50 hover:opacity-100"
              :to="$formRoute({ url: menu.link.cached_url })"
            >
              {{ menu.label }}
            </nuxt-link>

            <div class="relative group" v-else>
              <span class="uppercase opacity-50 hover:opacity-100 cursor-pointer">{{ menu.label }}</span>
              <ul
                class="absolute bg-white shadow-md rounded-lg py-2 px-4 mt-2 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
              >
                <li v-for="subMenu in menu.submenu" :key="subMenu._uid">
                  <nuxt-link :to="$formRoute({ url: subMenu.link.cached_url })">
                    {{ subMenu.label }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <div class="relative hidden md:block">
      <div class="w-full flex flex-wrap justify-end items-center">
        <a href="tel:253-203-5355" class="hidden lg:block group">
          <IconPhone class="w-6 h-6 inline text-gray-400" />
          <span class="text-xs hidden lg:inline"> (253) 203-5355 </span>
        </a>
        <a href="https://www.facebook.com/BlackPearlPainters/" class="hidden lg:block ml-6">
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
          class="absolute w-40 xl:w-56 right-0 mt-2"
        />
      </a>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import IconPhone from '@/assets/images/icons/icon-phone.svg?inline'
import IconFacebook from '@/assets/images/icons/icon-facebook.svg?inline'
import IconMenu from '@/assets/images/icons/icon-menu.svg?inline'
import IconClose from '@/assets/images/icons/icon-close.svg?inline'
import MobileSubmenu from '@/components/MobileSubmenu'

export default {
  name: 'GlobalHeader',
  components: {
    IconPhone,
    IconFacebook,
    IconMenu,
    IconClose,
    MobileSubmenu,
  },

  data() {
    return {
      isMobileMenuOpen: false,
      activeClass: 'active',
    }
  },

  computed: {
    ...mapState('global', ['headerLogo', 'headerNavigation', 'loaded']),
    currentPage() {
      return this.$route.path
    },
  },
  watch: {
    $route(to, from) {
      this.isMobileMenuOpen = false
    },
  },

  methods: {
    toggleNav: function () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },
}
</script>

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
