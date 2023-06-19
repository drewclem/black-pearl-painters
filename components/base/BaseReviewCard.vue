<template>
  <div class="flex flex-col bg-white shadow-md p-8 pb-4">
    <p class="opacity-50 flex-1 text-sm">
      {{ review.quote }}
    </p>
    <div class="flex justify-between">
      <div class="flex justify-between">
        <ReviewStar v-for="star in parseInt(review.stars)" :key="star" />
      </div>
      <p class="opacity-50 mb-4 font-semibold">
        <strong>- {{ review.name }}</strong
        >&nbsp; {{ review.date }}
      </p>
    </div>
  </div>
</template>

<script>
import ReviewStar from '~/components/ReviewStar.vue'

export default {
  components: {
    ReviewStar,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>
