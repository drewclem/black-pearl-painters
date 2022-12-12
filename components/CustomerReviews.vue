<template>
  <div class="container mx-auto px-4 lg:px-0">
    <h2 class="text-xl md:text-3xl mb-6 md:text-center"><span class="text-gray-600">Customer</span> Reviews</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-body">
      <div class="review-card p-6 pb-1 mb-4 md:mb-0 shadow-md flex flex-col justify-between text-sm">
        <p class="opacity-50 mb-4">
          “Justin and his crew did an amazing job giving my home a fresh new look. They did a high quality job and
          highly recommended them.”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold"><strong>- Robert, E.</strong>&nbsp; 8/8/2022</p>
        </div>
      </div>

      <div class="review-card p-6 pb-1 mb-4 md:mb-0 shadow-md flex flex-col justify-between text-sm">
        <p class="opacity-50 mb-4">
          “We just had the exterior of our house painted by Justin, Alex and their crew. They did a first-class job.
          Their attention to detail was excellent. We have a yard with a lot of plants and they were very diligent about
          making sure that they didn't damage any plants. We highly recommend Black Pearl!”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold"><strong>- Vicki, K.</strong>&nbsp; 4/23/2022</p>
        </div>
      </div>

      <div class="review-card p-6 pb-1 mb-4 md:mb-0 flex flex-col justify-between shadow-md text-sm">
        <p class="opacity-50 mb-4">
          “The final result was beyond my expectations. Everything the owner, Justin, promised came true. His crew ,
          with Alex in the lead ,was very professional, talented and a delight to see them in action. I HIGHLY recommend
          this wonderful company.”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold"><strong>- Terrance, K.</strong>&nbsp; 4/23/2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerReviews',
}
</script>
