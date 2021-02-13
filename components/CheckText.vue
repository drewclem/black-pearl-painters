<script>
/*
 * What is this component? What does it do?
 */

export default {}
</script>

<template>
  <div class="flex sm:w-1/2 pr-4 items-center mb-2">
    <font-awesome-icon :icon="['fas', 'check']" class="mr-3 text-gray-500" />
    <span class="text-base md:text-lg">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="postcss" scoped></style>
