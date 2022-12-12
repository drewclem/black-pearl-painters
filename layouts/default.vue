<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <global-header />

    <div class="estimate-btn fixed z-50 right-0 mr-3">
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

<style scoped>
.estimate-btn {
  bottom: 0;
  margin-bottom: 1rem;
}
@media (min-width: 1220px) {
  .estimate-btn {
    top: 50%;
    margin-top: -12px;
  }
}
</style>
