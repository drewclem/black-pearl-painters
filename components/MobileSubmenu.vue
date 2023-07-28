<template>
  <div>
    <button class="flex w-full justify-between items-center" @click="toggleMenu">
      <span class="uppercase " >{{ menu.label }}</span>
      <IconChevron :class="`w-5 h-5 transform ${isSubmenuOpen ? '-rotate-180' : '-rotate-0'}`" />
    </button>

    <transition name="open">
      <ul v-if="isSubmenuOpen">
        <li v-for="menu in menu.submenu" class="flex flex-col p-2" :key="menu._uid">
          <nuxt-link class="uppercase" :to="$formRoute({ url: menu.link.cached_url })">
            {{ menu.label }}
          </nuxt-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import IconChevron from '@/assets/images/icons/icon-chevron.svg?inline'

export default {
  components: {
    IconChevron,
  },
  props: {
    menu: {
      type: Object,
      required: true,
    },
    isParentOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isSubmenuOpen: false,
    }
  },
  watch: {
    $route(to, from) {
      this.isSubmenuOpen = false
    },
    isParentOpen() {
      this.isSubmenuOpen = false
    },
  },
  methods: {
    toggleMenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen
    },
  },
}
</script>

<style scoped>
.open-enter-active,
.open-leave-active {
  transition: all 150ms ease-in-out;
}

@media (min-width: 768px) {
  .open-enter-from,
  .open-leave-to {
    opacity: 0;
    transform: translateY(100%) !important;
  }
}
</style>
