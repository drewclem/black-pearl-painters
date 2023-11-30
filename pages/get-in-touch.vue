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
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHp0000025y70"
          method="POST"
        >
          <input class="hidden" type="hidden" name="form-name" value="contact" />

          <input type="hidden" name="oid" value="00DHp0000025y70" />
          <input type=hidden name="retURL" value=https://blackpearlpainters.com/get-in-touch>

          <div class="grid md:grid-cols-2 gap-6 mb-4">
            <div class=" ">
              <label class="text-xs text-gray-700 font-body block mb-2" for="first_name">First Name</label>
              <input
                class="border b-gray-300 p-1 w-full"
                id="first_name"
                maxlength="40"
                name="first_name"
                size="20"
                type="text"
              />
            </div>
            <div class=" ">
              <label class="text-xs text-gray-700 font-body block mb-2" for="last_name">Last Name</label>
              <input
                class="border b-gray-300 p-1 w-full"
                id="last_name"
                maxlength="40"
                name="last_name"
                size="20"
                type="text"
              />
            </div>

            <div class=" ">
              <label class="text-xs text-gray-700 font-body block mb-2" for="email">Email</label>
              <input
                type="email"
                class="border b-gray-300 p-1 w-full"
                id="email"
                maxlength="80"
                name="email"
                size="20"
              />
            </div>

            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="phone">Phone Number</label>
              <input
                type="text"
                class="border b-gray-300 p-1 w-full"
                id="phone"
                maxlength="40"
                name="email"
                size="20"
              />
            </div>
          </div>

          <div>
            <div class="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="street">Street</label>
                <textarea type="text" class="border b-gray-300 p-1 w-full" id="street" rows="1" />
              </div>

              <div>
                <label class="text-xs text-gray-700 font-body block mb-2" for="city">City</label>
                <input
                  type="text"
                  class="border b-gray-300 p-1 w-full"
                  id="city"
                  maxlength="40"
                  name="city"
                  size="20"
                />
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <label class="text-xs text-gray-700 font-body block mb-2" for="state">State</label>
              <div class="select-wrap">
                <select id="state_code" class="border b-gray-300 appearance-none p-1 w-full" name="state_code">
                  <option value="">--None--</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>

            <div>
              <label class="text-xs text-gray-700 font-body block mb-2" for="zip">Zip</label>
              <input type="text" class="border b-gray-300 p-1 w-full" id="zip" maxlength="20" name="zip" size="20" />
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-4">
            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="time">Best Time to Contact</label>
              <div class="select-wrap">
                <select
                  id="00NHp00000hhO6J"
                  name="00NHp00000hhO6J"
                  class="border b-gray-300 appearance-none p-1 w-full"
                  title="Best Time to Contact"
                >
                  <option value="">--None--</option>
                  <option value="Morning">Morning</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="project">Project Type</label>
              <div class="select-wrap">
                <select
                  id="00NHp00000hhO6E"
                  name="00NHp00000hhO6E"
                  class="border b-gray-300 appearance-none p-1 w-full"
                  title="Project Type"
                >
                  <option value="">--None--</option>
                  <option value="Painting">Painting</option>
                  <option value="Coating">Coating</option>
                  <option value="Light Carpentry">Light Carpentry</option>
                  <option value="Window Coverings">Window Coverings</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="">
              <label class="text-xs text-gray-700 font-body block mb-2" for="howdYourHear"
                >How'd you hear about us?</label
              >
              <div class="select-wrap">
                <select
                  id="00NHp00000hhO5z"
                  name="00NHp00000hhO5z"
                  class="border b-gray-300 appearance-none p-1 w-full"
                  title="Inbound Lead Source"
                >
                  <option value="">--None--</option>
                  <option value="Referral">Referral</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Direct Mailer">Direct Mailer</option>
                  <option value="Home Advisor">Home Advisor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label class="text-xs text-gray-700 font-body block mb-2" for="comments">Customer Comments</label>
            <textarea
              id="00NHp00000hhO7g"
              class="w-full border b-gray-400 p-1"
              name="00NHp00000hhO7g"
              rows="3"
              type="text"
              wrap="soft"
            ></textarea>
          </div>

          <p class="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <input type="submit" class="btn hover:shadow-md" name="submit" />

          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"Website_Form_Fill","fallback":"true","orgId":"00DHp0000025y70","ts":""}'
          />
          <input type="hidden" name="oid" value="00DHp0000025y70" />
          <input type=hidden name="retURL" value=http://>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { useStoryblokApi } from '@storyblok/nuxt-2'

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
  head() {
    return {
      title: `Get in Touch | Black Pearl Painters`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Get in Touch',
        },
        {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=utf-8',
        },
      ],
    }
  },
  computed: {
    ...mapState('global', ['loaded']),
  },
  async fetch() {
    const version = this.$config.isPreview ? 'draft' : 'published'
    const storyblokApi = useStoryblokApi()

    if (!this.loaded) {
      const globalRes = await storyblokApi.get('cdn/stories/global', {
        version: version,
      })

      await this.$store.commit('global/setGlobals', globalRes.data.story.content)
      await this.$store.commit('global/setLoaded', true)
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
