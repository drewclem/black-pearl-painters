<template>
  <div class="container mx-auto px-4 lg:px-0 mt-12 mb-32">
    <h1 class="text-lg uppercase text-gray-400 tracking-widest font-bold mb-8">Get in Touch</h1>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="pb-6 md:pb-0">
        <h2 class="text-2xl text-black font-bold mb-4">Contact Us Today!</h2>
        <p class="font-body text-gray-600 mb-6">
          We know some companies take days to get back to you and sometimes weeks to even provide you with a bid. We
          change that and get back to you ASAP because we want to make sure to get you a bid and on our schedule as soon
          as possible! Contact us today for a free estimate!
        </p>

        <ul>
          <li class="flex flex-col mb-6">
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
      <div class="order-last md:order-first md:align-right md:pr-6">
        <p
          v-if="responseMessage"
          :class="`${
            responseState === 'success' ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'
          } text-sm p-1 rounded`"
        >
          {{ responseMessage }}
        </p>
        <form @submit.prevent="handleSubmit" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input class="hidden" type="hidden" name="form-name" value="contact" />

          <div class="grid md:grid-cols-3 gap-6 mb-4">
            <div class=" ">
              <label class="text-xs text-gray-700 font-body block mb-2" for="name">Name</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="name" v-model="form.name" required />
            </div>

            <div class=" ">
              <label class="text-xs text-gray-700 font-body block mb-2" for="email">Email</label>
              <input type="email" class="border b-gray-300 p-1 w-full" id="email" v-model="form.email" required />
            </div>

            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="phone">Phone Number</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="phone" v-model="form.phone" required />
            </div>
          </div>

          <div>
            <div class="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="address-1">Address 1</label>
                <input
                  type="text"
                  class="border b-gray-300 p-1 w-full"
                  id="address-1"
                  v-model="form.address_1"
                  required
                />
              </div>

              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="address-2"
                  >Address 2 <span class="text-xs">(optional)</span></label
                >
                <input type="text" class="border b-gray-300 p-1 w-full" id="address-2" v-model="form.address_2" />
              </div>
            </div>

            <div class="grid md:grid-cols-3 gap-6 mb-4">
              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="city">City</label>
                <input type="text" class="border b-gray-300 p-1 w-full" id="city" v-model="form.city" />
              </div>

              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="state">State</label>
                <input type="text" class="border b-gray-300 p-1 w-full" id="state" v-model="form.state" />
              </div>

              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="zip">Zip</label>
                <input type="text" class="border b-gray-300 p-1 w-full" id="zip" v-model="form.zip" />
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-4">
            <div class="">
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

            <div class="">
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

            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="howdYourHear"
                >How'd you hear about us?</label
              >
              <div class="select-wrap">
                <select
                  id="howdYouHear"
                  class="w-full appearance-none border b-gray-300 p-1 rounded-none bg-white"
                  v-model="form.howdYouHear"
                  required
                >
                  <option selected disabled>Select One</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Direct Mailing">Direct Mailing</option>
                  <option value="Home Advisor">Home Advisor</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label class="text-xs text-gray-700 font-body block mb-2" for="comments">Comments</label>
            <textarea
              id="comments"
              rows="8"
              class="w-full border b-gray-400"
              v-model="form.comments"
              required
            ></textarea>
          </div>

          <p class="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
        timeToContact: '',
        projectType: '',
        howdYouHear: '',
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
            this.form.howdYouHear = ''
            this.form.address_1 = ''
            this.form.address_2 = ''
            this.form.city = ''
            this.form.state = ''
            this.form.zip = ''
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
