<template>
  <section class="container mx-auto my-12 lg:my-24 px-4 md:px-0">
    <h2 class="text-xl md:text-3xl md:text-center">{{ block.title }}</h2>
    <p v-if="block.subtitle" class="md:text-center text-lg font-semibold text-gray-500">{{ block.subtitle }}</p>

    <BaseCarousel v-if="block.reviews.length > 3" :desktopSlidesPerView="3">
      <BaseCarouselSlide v-for="item in block.reviews" :key="item._uid">
        <BaseReviewCard :review="item" />
      </BaseCarouselSlide>
    </BaseCarousel>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-body mt-8">
      <BaseReviewCard v-for="item in block.reviews" :review="item" :key="item._uid" />
    </div>
  </section>
</template>

<script>
import BaseCarousel from '~/components/base/BaseCarousel.vue'
import BaseCarouselSlide from '~/components/base/BaseCarouselSlide.vue'
import BaseReviewCard from '~/components/base/BaseReviewCard.vue'
import ReviewStar from '~/components/ReviewStar.vue'

export default {
  components: {
    ReviewStar,
    BaseCarousel,
    BaseCarouselSlide,
    BaseReviewCard,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
