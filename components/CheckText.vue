<script>
import IconCheck from '@/assets/images/icons/icon-check.svg?inline'

export default {
  components: {
    IconCheck,
  },
}
</script>

<template>
  <div class="flex">
    <IconCheck class="mr-2 w-8 h-8 text-gray-500" />
    <p class="w-full">
      <slot></slot>
    </p>
  </div>
</template>
