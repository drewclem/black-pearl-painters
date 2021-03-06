<script>
import CustomerReviews from '~/components/CustomerReviews.vue'
import GoogleMap from '~/components/GoogleMap.vue'
import CheckText from '@/components/CheckText'

export default {
  name: 'Index',
  components: {
    CustomerReviews,
    GoogleMap,
    CheckText,
  },
}
</script>

<template>
  <div>
    <section class="w-3/4 mx-auto text-center mt-12 md:mt-24 xl:mt-20 mb-12">
      <h1 class="text-gray-600  text-4xl leading-tight md:text-5xl mb-4">
        Come Home to
        <span class="text-black">Quality.</span>
      </h1>
      <p class="text-sm md:text-lg text-gray-600 mx-auto mb-10">
        Professional, Affordable, & Dependable Exterior Services -
        <br />including painting, cleaning, blind & shutter installation, and more!
      </p>
      <button class="btn">
        <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
      </button>
    </section>

    <div class="transform scale-150 md:scale-100">
      <img src="~/assets/images/bpp-heroImage.png" alt="Colorful house between dull gray houses" />
    </div>

    <section class="container mx-auto md:flex items-center px-4 my-16 md:my-24">
      <img src="~/assets/images/bpp-paintCan.png" alt="A can of house paint" class="md:w-1/2 px-2" />
      <div class="md:w-1/2 pb-8 md:pl-4">
        <h2 class="text-xl md:text-3xl  mb-4"><span class="text-gray-600">We are the</span> standard for quality.</h2>
        <div class="text-sm md:text-base text-gray-600">
          <p class="mb-3">
            Black Pearl Painters is a local, family owned company. Here at Black Pearl Painters we give it our all to
            provide amazing results and superb customer service along the way.
          </p>
          <p class="mb-3">
            Black Pear Painters believes prep is the foundation to every great paint project. When we pair that up with
            premium primer, premium caulk, and premium paint it sets all of our customers up for a long lasting quality
            paint job.
          </p>
          <p class="mb-3">
            Every member of Black Pearl Painter’s strive to get the job done quickly and efficiently. Customer
            satisfaction is our goal because without happy customers we are not a happy company. We perform a final walk
            through with all our customers on every job to ensure a job well done. We complete all touchups to your
            satisfaction before the job is considered complete.
          </p>
        </div>
      </div>
    </section>

    <section class="roller-bg">
      <div class="container mx-auto lg:pb-24 xl:pb-48 mb-24 md:flex px-4 lg:items-center">
        <h2 class="block md:hidden text-xl mb-8">
          <span class="text-gray-600">Painting. Blinds. Shutters</span> &amp; More!
        </h2>
        <div class="md:w-1/2 md:pl-4 pb-4 md:order-last">
          <img src="~/assets/images/house-temp.png" class="w-full" />
        </div>
        <div class="md:w-1/2 md:pr-4">
          <h2 class="hidden md:block text-3xl  mb-4">
            <span class="text-gray-600">Painting. Blinds. Shutters</span> &amp; More!
          </h2>
          <div class="text-gray-700 font-body">
            <p class="mb-4 text-sm md:text-base text-gray-600">
              Black Pearl Painters is a full service painting company that specializes in residential, commercial, and
              industrial coatings. This full service includes carpentry, prep work needed to make sure the substrate is
              ready for paint, and applying the coating.
            </p>
            <div class="grid grid-cols-2 w-3/4 mx-auto mb-4">
              <CheckText>Painting</CheckText>
              <CheckText>Window Coverings</CheckText>
              <CheckText>Coating</CheckText>
              <CheckText>Light Carpentry</CheckText>
            </div>
            <p class="mb-4 text-sm md:text-base text-gray-600">
              Do you not see the type of service you are looking for? Not many things surprise us anymore. We have done
              many custom finishes on various surfaces, so don’t hesitate to ask! Who knows, that “crazy” vision you
              have may not be so crazy after all. Sign up for an estimate today!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto md:text-right lg:-mt-16 px-4 my-32">
      <h2 class="text-xl md:text-3xl  mb-2"><span class="text-gray-600">Ready to Get</span> Started?</h2>
      <p class="text-xl text-gray-400 font-body">
        Call us today at <a class="text-gray-600 underline" href="tel:253-203-5335">(253) 203-5335</a> for a free
        consultation.
      </p>
    </section>

    <customer-reviews class="my-32" />

    <google-map class="mb-12 md:mb-24" />

    <section class="container mx-auto px-4 my-12 md:my-24">
      <h2 class="text-center text-xl md:text-3xl  mb-2"><span class="text-gray-600">Recent</span> Projects</h2>
      <div class="md:flex">
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
      </div>
    </section>

    <section class="blue-roller-bg md:py-6 lg:py-10 mb-12 md:mb-20">
      <div class="container mx-auto md:py-40 lg:py-64 md:text-white px-4">
        <h2 class="text-2xl md:text-4xl mb-2">
          Areas Serviced
        </h2>
        <ul class="text-lg md:text-2xl list-disc ml-4">
          <li>King County</li>
          <li>Snohomish County</li>
          <li>Pierce County</li>
          <li>Kitsap County</li>
        </ul>
      </div>
    </section>

    <section class="container mx-auto text-center px-4 mb-12">
      <h2 class="text-xl md:text-3xl  mb-2"><span class="text-gray-600">Ready to</span> Get Started?</h2>
      <p class="font-body text-gray-600 mb-4">
        Click the button below to request a free quote - Or call us at
        <span class="font-semibold">(253) 203-5355</span> for a free consultation.
      </p>

      <button class="btn">
        <nuxt-link to="/get-in-touch" class="button hover:shadow-md">Request a Quote</nuxt-link>
      </button>
    </section>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .roller-bg {
    background-image: url(~../assets/images/paint-roller.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -190px;
    background-position-x: 80px;
  }

  .blue-roller-bg {
    background-image: url(~../assets/images/blue-paintroll.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

@media (min-width: 1024px) {
  .roller-bg {
    background-position-y: 20px;
    background-position-x: 120px;
  }
}

@media (min-width: 1900px) {
  .roller-bg {
    background-position-y: -90px;
    background-position-x: 250px;
  }
}

@media (min-width: 2560px) {
  .roller-bg {
    background-image: none;
  }
}
</style>
