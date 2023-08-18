<template>
  <div class="swiper relative">
    <div ref="swiperRef" class="swiper-container">
      <ul class="swiper-wrapper">
        <!-- @slot The slider’s content. Should contain one or multiple `BaseSliderSlide` components. -->
        <slot />
      </ul>
    </div>

    <div v-if="hasNavigation" class="swiper-navigation hidden lg:block">
      <div ref="prevButtonRef" class="swiper-button-prev" />
      <div ref="nextButtonRef" class="swiper-button-next" />
    </div>

    <div class="flex justify-center" v-if="hasPagination">
      <div ref="paginationRef" class="swiper-pagination" @click.stop />
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

Swiper.use([Navigation, Pagination, A11y, Autoplay])

/**
 * A swipeable slider (AKA carousel or slideshow).
 */
export default {
  props: {
    /** The active slide index. */
    activeIndex: {
      type: Number,
      default: 0,
    },
    /** The number of slides per view. If not set, it will be determined automatically based on the slides’ width. */
    mobileSlidesPerView: {
      type: Number,
      default: 1,
    },
    /** The number of slides per view. If not set, it will be determined automatically based on the slides’ width. */
    desktopSlidesPerView: {
      type: Number,
      default: 5,
    },
    /** Whether the slider has navigation (previous and next slide) buttons. */
    hasNavigation: {
      type: Boolean,
      default: false,
    },
    /** Whether the slider has pagination (dots indicating the selected slide and the total number of slides). */
    hasPagination: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      swiper: null,
      swiperRef: null,
      prevButtonRef: null,
      nextButtonRef: null,
      paginationRef: null,
      innerActiveIndex: null,
      slideNodes: [],
    }
  },
  watch: {
    activeIndex: {
      immediate: true,
      handler() {
        this.innerActiveIndex = this.activeIndex
        if (this.swiper) {
          this.swiper.slideTo(this.innerActiveIndex)
        }
      },
    },
    slidesPerView() {
      if (this.swiper) {
        this.swiper.params.slidesPerView = this.slidesPerView
      }
    },
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiperRef, {
      initialSlide: this.activeIndex,
      slidesPerView: this.mobileSlidesPerView,
      watchOverflow: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      loop: this.loop,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: this.desktopSlidesPerView,
        },
      },
      navigation: {
        prevEl: this.$refs.prevButtonRef,
        nextEl: this.$refs.nextButtonRef,
      },
      pagination: {
        el: this.$refs.paginationRef,
        clickable: true,
      },
    })
    this.swiper.on('slideChange', () => {
      this.innerActiveIndex = this.swiper.activeIndex
      /** Emitted when the active slide changes. */
      this.$emit('slideChange', this.innerActiveIndex)
    })
  },
  async updated() {
    this.swiper.update()
  },
  async beforeDestroy() {
    this.swiper.destroy()
  },
}
</script>

<style lang="postcss">
@import 'swiper/swiper-bundle.css';

.swiper-slide {
  padding: 1rem;
}

.swiper-pagination {
  display: flex;
  margin-top: 0.25rem;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 24px;
}

@screen lg {
  .swiper-pagination {
    margin-top: 1rem;
  }
}
</style>
