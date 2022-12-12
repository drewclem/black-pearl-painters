<template>
  <div class="relative">
    <button
      v-if="isOpen"
      class="hidden md:block absolute -mt-2 -ml-2 rounded-full bg-white p-1 shadow"
      @click="isOpen = false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-2 h-2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <nuxt-link to="/get-in-touch" class="text-xs">
      <div
        class="flex items-center bg-blue-500 hover:bg-blue-600 text-white p-2 shadow hover:shadow-lg transition duration-150 ease-in-out"
      >
        <span>
          <IconCalendar class="w-5 h-5 text-white" />
        </span>
        <p v-if="isOpen" class="hidden md:block leading-5 mb-0 ml-3">Schedule Estimate</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import IconCalendar from '@/assets/images/icons/icon-calendar.svg?inline'
export default {
  components: {
    IconCalendar,
  },
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>
