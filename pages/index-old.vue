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
        Professional, Affordable, &amp; Dependable Interior and Exterior Services -
        <br />including painting, carpentry, &amp; siding, and more!
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
            We want to do more than just paint your home or business! It is our goal to provide a level of service that
            goes above and beyond. Our customers keep coming back to us for a reason – we live up to our promises and
            treat our customer’s home as we would want ours to be treated. What you need to know about us is that we
            care about our customers and our reputation. We have built our clientele by providing exceptional service
            since 2016. These attributes include:
          </p>
          <div>
            <CheckText
              ><strong>Trustworthiness</strong>. We are bonded, licensed, and insured with reliable
              employees.</CheckText
            >
            <CheckText>
              <strong>Consistency.</strong> Our strategic processes allow us to consistently provide quality workmanship
              with every project we complete.
            </CheckText>
            <CheckText>
              <strong>Commitment.</strong> We guarantee our customer’s satisfaction – On most of our jobs we do not
              collect a dime until we are 100% completed (including final touch-ups). We stand by all of our
              workmanship!
            </CheckText>
            <CheckText>
              <strong>Value.</strong> Our prices are competitive! We measure all of our projects and plug those numbers
              into our pricing program to ensure we are fair and accurate on every job. You can be sure you get the most
              value for your investment.
            </CheckText>
          </div>
          <!-- <p class="mb-3">
            Black Pear Painters believes prep is the foundation to every great paint project. When we pair that up with
            premium primer, premium caulk, and premium paint it sets all of our customers up for a long lasting quality
            paint job.
          </p>
          <p class="mb-3">
            Every member of Black Pearl Painter’s strive to get the job done quickly and efficiently. Customer
            satisfaction is our goal because without happy customers we are not a happy company. We perform a final walk
            through with all our customers on every job to ensure a job well done. We complete all touchups to your
            satisfaction before the job is considered complete.
          </p> -->
        </div>
      </div>
    </section>

    <section class="roller-bg 2xl:py-32">
      <div class="container mx-auto lg:pb-24 xl:pb-48 mb-24 md:flex px-4 lg:items-center">
        <h2 class="block md:hidden text-xl mb-8">
          Get to Know Black Pearl Painters
        </h2>
        <div class="md:w-1/2 md:pl-4 pb-4 md:order-last">
          <img
            class="featured-img"
            src="~/assets/images/featured_house.jpg"
            alt="A freshly painted beige two story, complete with a three car garage, sits in a perfectly curated yard with lush hedges and red floweres sprinkled throughout."
          />
        </div>
        <div class="md:w-1/2 md:pr-4">
          <h2 class="hidden md:block text-3xl mb-4">
            Get to Know Black Pearl Painters
          </h2>
          <div class="text-gray-700 font-body">
            <p class="mb-4 text-sm md:text-base text-gray-600">
              Whether you need new paint inside or outside of your home or an entire warehouse, we are your trusted
              source for quality workmanship. Get to know us by calling to get an estimate the next time you are
              planning a new painting project.
            </p>
            <p class="text-xl text-gray-400 font-body">
              Call us today at <a class="text-gray-600 underline" href="tel:253-203-5335">(253) 203-5335</a> for a free
              consultation.
            </p>
            <!-- <div class="grid grid-cols-2 w-3/4 mx-auto mb-4">
              <CheckText>Painting</CheckText>
              <CheckText>Window Coverings</CheckText>
              <CheckText>Coating</CheckText>
              <CheckText>Light Carpentry</CheckText>
            </div>
            <p class="mb-4 text-sm md:text-base text-gray-600">
              Do you not see the type of service you are looking for? Not many things surprise us anymore. We have done
              many custom finishes on various surfaces, so don’t hesitate to ask! Who knows, that “crazy” vision you
              have may not be so crazy after all. Sign up for an estimate today!
            </p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="container mx-auto md:text-right lg:-mt-16 px-4 my-32">
      <h2 class="text-xl md:text-3xl  mb-2"><span class="text-gray-600">Ready to Get</span> Started?</h2>
      <p class="text-xl text-gray-400 font-body">
        Call us today at <a class="text-gray-600 underline" href="tel:253-203-5335">(253) 203-5335</a> for a free
        consultation.
      </p>
    </section> -->

    <customer-reviews class="my-32" />

    <google-map class="mb-12 md:mb-24" />

    <!-- <section class="container mx-auto px-4 my-12 md:my-24">
      <h2 class="text-center text-xl md:text-3xl  mb-2"><span class="text-gray-600">Recent</span> Projects</h2>
      <div class="md:flex">
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
        <img src="~/assets/images/house-temp.png" class="md:w-1/3" />
      </div>
    </section> -->

    <section class="blue-roller-bg md:py-6 lg:py-10 2xl:py-56 mb-12 md:mb-20">
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

.featured-img {
  aspect-ratio: 4/3;
  object-fit: cover;
}
</style>
