<template>
  <section class="container mx-auto my-12 lg:my-20 px-4 md:px-0">
    <div class="grid lg:grid-cols-2 gap-6 xl:gap-12">
      <img :src="block.image.filename" :alt="block.image.filename" />

      <div>
        <h2 class="text-xl md:text-3xl mb-4">{{ block.title }}</h2>
        <div class="text-sm md:text-base text-gray-600">
          <BaseRichText :content="block.text" />
        </div>
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
