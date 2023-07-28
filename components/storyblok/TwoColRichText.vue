<template>
  <section class="container mx-auto my-12 lg:my-20 px-4 md:px-0">
    <div class="grid lg:grid-cols-2 gap-6 xl:gap-12">
      <div>
        <BaseRichText :content="block.textLeft" />
      </div>

      <div>
        <BaseRichText :content="block.textRight" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseRichText from '../base/BaseRichText.vue'

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
