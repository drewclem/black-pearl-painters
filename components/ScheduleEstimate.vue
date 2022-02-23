<template>
  <nuxt-link to="/get-in-touch" class="text-xs">
    <div
      class="flex items-center opacity-75 hover:opacity-100 bg-blue-500 hover:bg-blue-600 text-white p-2 shadow hover:shadow-lg transition duration-150 ease-in-out"
    >
      <span class="mr-3">
        <IconCalendar class="w-5 h-5 text-white" />
      </span>
      <p class="leading-5 mb-0">Schedule Estimate</p>
    </div>
  </nuxt-link>
</template>

<script>
import IconCalendar from '@/assets/images/icons/icon-calendar.svg?inline'
export default {
  components: {
    IconCalendar,
  },
}
</script>
