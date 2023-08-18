<template>
  <section class="container mx-auto my-12 lg:my-20 px-4 md:px-0 overflow-hidden">
    <div class="grid lg:grid-cols-3 gap-12">
      <div v-for="gallery in block.galleries" :key="gallery._uid">
        <button @click="activeModal = gallery._uid">
          <span class="sr-only">View Gallery</span>

          <img :src="gallery.images[0].filename" class="w-full h-auto shadow-md" />
          <h3 class="mt-3">{{ gallery.title }}</h3>
        </button>

        <div
          v-if="activeModal === gallery._uid"
          class="modal-bg z-50 absolute w-full h-full inset-0 bg-black bg-opacity-50"
        >
          <button @click="activeModal = null" class="m-4 text-white text-2xl">
            <span class="sr-only">Close Gallery</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="overflow-hidden h-full">
            <div>
              <BaseCarousel :desktopSlidesPerView="1" hasPagination :loop="false">
                <BaseCarouselSlide v-for="item in gallery.images" :key="item._uid">
                  <div class="gallery-image">
                    <img :src="item.filename" class="shadow-md" />
                  </div>
                </BaseCarouselSlide>
              </BaseCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCarousel from '~/components/base/BaseCarousel.vue'
import BaseCarouselSlide from '~/components/base/BaseCarouselSlide.vue'

export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseCarousel,
    BaseCarouselSlide,
  },
  data() {
    return {
      activeModal: null,
    }
  },
}
</script>

<style scoped>
.modal-bg {
  height: 100dvh;
}

.gallery-image {
  max-width: 95vw;
  overflow: hidden;
  margin: 0 auto;
}

.gallery-image img {
  border: 0.5rem solid white;
  aspect-ratio: 16/9;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-image {
    max-width: 75vw;
  }

  .gallery-image img {
    border: 2rem solid white;
  }
}
</style>
