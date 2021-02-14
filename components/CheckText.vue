<script>
import IconCheck from '@/assets/images/icons/icon-check.svg?inline'
/*
 * What is this component? What does it do?
 */

export default {
  components: {
    IconCheck,
  },
}
</script>

<template>
  <div>
    <IconCheck class="inline mr-2 w-10 h-10 text-gray-500" />
    <span class="">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="postcss" scoped></style>
