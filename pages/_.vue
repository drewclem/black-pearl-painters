<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script>
import { mapState } from 'vuex'
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/nuxt-2'

export default {
  data() {
    return {
      story: { content: {} },
    }
  },
  computed: {
    ...mapState('global', ['loaded']),
  },
  head() {
    return {
      title: `${this.story.name} | Black Pearl Painters`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.story.name,
        },
      ],
    }
  },
  async fetch() {
    const fullSlug = this.$route.path === '/' ? 'home' : this.$route.path
    const version = this.$config.isPreview ? 'draft' : 'published'

    console.log('is preview', this.$config.isPreview)

    const storyblokApi = useStoryblokApi()
    const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
      version: version,
    })

    this.story = data.story

    if (!this.loaded) {
      const globalRes = await storyblokApi.get('cdn/stories/global', {
        version: version,
      })
      await this.$store.commit('global/setGlobals', globalRes.data.story.content)
      await this.$store.commit('global/setLoaded', true)
    }
  },
  mounted() {
    useStoryblokBridge(this.story.id, newStory => (this.story = newStory))
  },
}
</script>
