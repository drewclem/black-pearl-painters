<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <global-header />

    <div class="estimate-btn fixed z-50 ml-3 bottom-0 mb-3">
      <schedule-estimate />
    </div>

    <main class="flex-grow">
      <nuxt />
    </main>

    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from '../components/GlobalHeader.vue'
import GlobalFooter from '../components/GlobalFooter.vue'
import ScheduleEstimate from '../components/ScheduleEstimate'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    ScheduleEstimate,
  },
}
</script>
