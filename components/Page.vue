<template>
  <div v-editable="blok" class="w-full">
    <div v-if="blok.pageTitle" class="container mx-auto text-center py-6">
      <BasePageHeading>
        {{ blok.pageTitle }}
      </BasePageHeading>
    </div>
    <component v-for="block in blok.body" :is="block.component" :key="block._uid" :block="block" />
  </div>
</template>

<script>
import BasePageHeading from '~/components/BasePageHeading.vue'

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  components: {
    BasePageHeading,
  },
}
</script>
