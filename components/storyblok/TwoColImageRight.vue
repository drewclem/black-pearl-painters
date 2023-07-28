<template>
  <section :class="{ 'roller-bg 2xl:py-32': block.showPaintRoller }">
    <div class="container mx-auto my-12 lg:my-20 px-4 md:px-0" :class="{ 'lg:pb-24 xl:pb-48': block.showPaintRoller }">
      <div class="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
        <div>
          <h2 class="text-xl md:text-3xl mb-4">{{ block.title }}</h2>
          <div class="text-sm md:text-base text-gray-600">
            <BaseRichText :content="block.text" />
          </div>
        </div>

        <img class="featured-img" :src="block.image.filename" :alt="block.image.filename" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseRichText from '~/components/base/BaseRichText.vue'
export default {
  components: {
    BaseRichText,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
@media (min-width: 768px) {
  .roller-bg {
    background-image: url(~../../assets/images/paint-roller.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -190px;
    background-position-x: 80px;
  }
}

@media (min-width: 1024px) {
  .roller-bg {
    background-position-y: 20px;
    background-position-x: 120px;
  }
}

@media (min-width: 1900px) {
  .roller-bg {
    background-position-y: -90px;
    background-position-x: 250px;
  }
}

.featured-img {
  aspect-ratio: 4/3;
  object-fit: cover;
}
</style>
