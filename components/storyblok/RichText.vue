<template>
  <section class="max-w-3xl mx-auto my-12 lg:my-20">
    <BaseRichText :content="this.block.content" />
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
