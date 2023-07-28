<template>
  <section class="relative container mx-auto my-12 lg:my-20 px-4 md:px-0">
    <div v-html="block.code" />
  </section>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
