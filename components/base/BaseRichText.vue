<template>
  <div class="rich-text-block" v-html="document" />
</template>

<script>
import { renderRichText } from '@storyblok/nuxt-2'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    document() {
      return renderRichText(this.content)
    },
  },
}
</script>

<style lang="postcss" scoped>
/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6 {
  @apply text-gray-600;
}

/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6,
/deep/ p,
/deep/ ul,
/deep/ ol,
/deep/ blockquote,
/deep/ code,
/deep/ hr {
  @apply mb-6;
}

/deep/ p,
/deep/ ul,
/deep/ ol,
/deep/ blockquote,
/deep/ code,
/deep/ hr {
  @apply leading-loose;
}

/deep/ ul {
  @apply ml-6 relative;
}

/deep/ ul li::before {
  content: url(../../assets/images/icons/icon-check.svg);
  left: -2rem;

  @apply absolute mt-1 w-6 h-6;
}

/deep/ hr {
  @apply my-16;
}

/deep/ ol {
  @apply list-decimal ml-6;
}

/deep/ blockquote {
  @apply border-l-4 border-gray-600 pl-8 italic opacity-75;
}

@screen xl {
  /deep/ h1 {
    font-size: 2.25rem;
  }

  /deep/ h2 {
    font-size: 2rem;
  }

  /deep/ h3 {
    font-size: 1.75rem;
  }

  /deep/ h4 {
    font-size: 1.5rem;
  }

  /deep/ h5 {
    font-size: 1.25rem;
  }

  /deep/ h6 {
    font-size: 1rem;
  }
}
</style>
