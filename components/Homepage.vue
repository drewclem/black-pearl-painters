<template>
  <div v-editable="blok" class="w-full">
    <section class="w-3/4 mx-auto text-center mt-12 md:mt-24 xl:mt-20 mb-12">
      <h1 class="text-gray-600 text-4xl leading-tight md:text-5xl mb-4">
        {{ hero.heading }}
      </h1>
      <p v-if="hero.subheading" class="text-sm md:text-lg text-gray-600 mx-auto mb-10 xl:max-w-2xl">
        {{ hero.subheading}}
      </p>
      <button v-if="hero.buttonText" class="btn">
        <nuxt-link :to="hero.buttonLink.cached_url" class="button hover:shadow-md">{{ hero.buttonText}}</nuxt-link>
      </button>
    </section>

    <div class="transform scale-150 md:scale-100">
      <img :src="hero.backgroundImage.filename" alt="Colorful house between dull gray houses" />
    </div>
    <component v-for="block in blok.body" :is="block.component" :key="block._uid" :block="block" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hero() {
      return this.blok.hero[0]
    },
  },
}
</script>
