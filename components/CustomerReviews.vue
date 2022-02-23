<template>
  <div class="container mx-auto px-4 lg:px-0">
    <h2 class="text-xl md:text-3xl mb-6 md:text-center"><span class="text-gray-600">Customer</span> Reviews</h2>

    <div class="md:flex justify-between font-body">
      <div class="review-card p-6 pb-1 mb-4 md:mb-0 shadow-md flex flex-col justify-between text-sm">
        <p class="opacity-50 mb-4">
          “Professional, organized, efficient, excellent detailing---strongly recommend. The house looks terrific.”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold">- Shaw, S.</p>
        </div>
      </div>

      <div class="review-card p-6 pb-1 mb-4 md:mb-0 shadow-md flex flex-col justify-between text-sm">
        <p class="opacity-50 mb-4">
          “Recommend Black Pearl Painters to anyone, Justin and team was very professional, they were easy to work with
          even while we were out of town. Very Happy with my new home!!!”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold">- Vicki, K.</p>
        </div>
      </div>

      <div class="review-card p-6 pb-1 mb-4 md:mb-0 flex flex-col justify-between shadow-md text-sm">
        <p class="opacity-50 mb-4">
          “I could not have gotten a better painting outfit than Black Pearl Painters. Hire these guys for your job, you
          won't be disappointed!”
        </p>
        <div class="flex justify-between">
          <div>
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#f7901e" />
          </div>
          <p class="opacity-50 mb-4 font-semibold">- Terrance, K.</p>
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

<style scoped>
.review-card {
  width: 100%;
}

@media (min-width: 768px) {
  .review-card {
    width: 400px;
  }
}
</style>
