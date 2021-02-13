<template>
  <div class="container mx-auto px-4 md:px-0">
    <h1 class="text-lg uppercase text-gray-400  tracking-widest font-bold mb-8">Get in Touch</h1>
    <div class="md:flex">
      <div class="md:w-1/2 pb-6 md:pb-0">
        <h2 class="text-2xl text-black  font-bold mb-4">Lorem Ipsum Dolet</h2>
        <p class="font-body text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div class="md:w-1/2 order-last md:order-first md:align-right md:pr-6">
        <form>
          <div class="md:flex mb-4">
            <div class="mb-4 md:w-1/2 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="name">Name</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="name" />
            </div>

            <div class="mb-4 md:w-1/2">
              <label class="text-xs text-gray-700 font-body block mb-2" for="email">Email</label>
              <input type="email" class="border b-gray-300 p-1 w-full" id="email" />
            </div>
          </div>

          <div class="md:flex">
            <div class="mb-4 md:w-1/3 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="phone">Phone Number</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="phone" />
            </div>

            <div class="mb-4 md:w-1/3 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="time">Best Time to Contact</label>
              <div class="select-wrap">
                <select id="time" class="w-full appearance-none border b-gray-300 p-1 rounded-none bg-white">
                  <option selected disabled>Select One</option>
                  <option value="morning">Morning</option>
                  <option value="lunch">Lunch</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div class="mb-4 md:w-1/3">
              <label class="text-xs text-gray-700 font-body block mb-2" for="project">Project Type</label>
              <div class="select-wrap">
                <select id="project" class="w-full appearance-none border b-gray-300 p-1 rounded-none bg-white">
                  <option selected disabled>Select One</option>
                  <option value="painting">Painting</option>
                  <option value="coating">Coating</option>
                  <option value="light carpentry">Light Carpentry</option>
                  <option value="window coverings">Window Coverings</option>
                  <option value="others">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label class="text-xs text-gray-700 font-body block mb-2" for="comments">Comments</label>
            <textarea rows="8" class="w-full border b-gray-400"></textarea>
          </div>

          <button class="button hover:shadow-md" type="submit">Get in Touch</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetInTouch',
}
</script>

<style scoped>
.select-wrap {
  position: relative;
}

.select-wrap select {
  padding-right: 35px;
}

.select-wrap::after {
  content: '▾';
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 0.5rem;
  z-index: 1;
  color: rgba(0, 0, 0, 0.4);
  line-height: 1;
  font-size: 16px;
  pointer-events: none; /* Don't interfere with clicks */
}
</style>
