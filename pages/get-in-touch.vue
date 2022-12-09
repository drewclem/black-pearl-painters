<template>
  <div class="container mx-auto px-4 lg:px-0 mt-12 mb-32">
    <h1 class="text-lg uppercase text-gray-400  tracking-widest font-bold mb-8">Get in Touch</h1>
    <div class="md:flex">
      <div class="md:w-1/2 pb-6 md:pb-0">
        <h2 class="text-2xl text-black  font-bold mb-4">Contact Us Today!</h2>
        <p class="font-body text-gray-600 mb-6">
          We know some companies take days to get back to you and sometimes weeks to even provide you with a bid. We
          change that and get back to you ASAP because we want to make sure to get you a bid and on our schedule as soon
          as possible! Contact us today for a free estimate!
        </p>

        <ul>
          <li class="flex flex-col mb-4">
            <h3>Justin Schulke (Owner/Estimator/Project Management)</h3>
            <a class="opacity-50 underline hover:opacity-100" href="tel:2532035335">(253) 203-5335</a>
            <a class="opacity-50 underline hover:opacity-100" href="mailto:justin.schulke@blackpearlpainters.com"
              >Justin.Schulke@blackpearlpainters.com</a
            >
          </li>
          <li class="flex flex-col">
            <h3>Kellie Myler (Owner/Office Manager)</h3>
            <a class="opacity-50 underline hover:opacity-100" href="tel:25392125495335">(253) 921-2549</a>
            <a class="opacity-50 underline hover:opacity-100" href="mailto:kellie.myler@blackpearlpainters.com"
              >Kellie.Myler@blackpearlpainters.com</a
            >
          </li>
        </ul>
      </div>
      <div class="md:w-1/2 order-last md:order-first md:align-right md:pr-6">
        <p
          v-if="responseMessage"
          :class="
            `${
              responseState === 'success' ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'
            } text-sm p-1 rounded`
          "
        >
          {{ responseMessage }}
        </p>
        <form @submit.prevent="handleSubmit" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input class="hidden" type="hidden" name="form-name" value="contact" />

          <div class="md:flex mb-4">
            <div class="mb-4 md:w-1/2 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="name">Name</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="name" v-model="form.name" required />
            </div>

            <div class="mb-4 md:w-1/2">
              <label class="text-xs text-gray-700 font-body block mb-2" for="email">Email</label>
              <input type="email" class="border b-gray-300 p-1 w-full" id="email" v-model="form.email" required />
            </div>
          </div>

          <div class="md:flex">
            <div class="mb-4 md:w-1/3 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="phone">Phone Number</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="phone" v-model="form.phone" required />
            </div>

            <div class="mb-4 md:w-1/3 md:pr-4">
              <label class="text-xs text-gray-700 font-body block mb-2" for="time">Best Time to Contact</label>
              <div class="select-wrap">
                <select
                  id="time"
                  class="w-full appearance-none border b-gray-300 p-1 rounded-none bg-white"
                  v-model="form.timeToContact"
                  required
                >
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
                <select
                  id="project"
                  class="w-full appearance-none border b-gray-300 p-1 rounded-none bg-white"
                  v-model="form.projectType"
                  required
                >
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
            <textarea rows="8" class="w-full border b-gray-400" v-model="form.comments" required></textarea>
          </div>

          <p class="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field"/></label>
          </p>

          <button class="btn hover:shadow-md" type="submit">Get in Touch</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetInTouch',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        timeToContact: '',
        projectType: '',
        comments: '',
      },
      reponseMessage: null,
      reponseState: null,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.form,
        }),
      })
        .then((res, err) => {
          if (res.status === 200) {
            this.responseMessage = "Thanks for reaching out! We'll be in contact shortly!"
            this.responseState = 'success'
            this.form.name = ''
            this.form.email = ''
            this.form.phone = ''
            this.form.timeToContact = ''
            this.form.projectType = ''
            this.form.comments = ''
          } else {
            this.responseMessage = 'Oops! Looks like something went wrong. Please try again!'
            this.responseState = 'error'
          }
        })
        .catch(e => console.error(e))
    },
  },
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
