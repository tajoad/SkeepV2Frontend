<template>
  <div class="container-fluid">
    <div class="row min-vh-100 min-vw-100 vw-100 vh-100 top-main">
      <div class="col-6 left">
        <div class="img-height">
          <img src="../images/skeepw.png" alt="" class="main-img" />
        </div>
      </div>
      <div class="col-6 right">
        <div class="inner-right">
          <h2>Sign up</h2>
          <div class="inptags">
            <div class="align-items-center"></div>
            <div class="form-setup">
              <div class="col mb-2 input">
                <input
                  type="text"
                  placeholder="Email"
                  v-model="v$.user.email.$model"
                  required
                  autocomplete="new-password"
                />
              </div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.user.email.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="form-setup">
              <div class="col mb-2 input">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="v$.user.password.$model"
                  required
                  autocomplete="new-password"
                />
              </div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.user.password.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="col mb-2 input">
              <input
                type="password"
                placeholder="Confirm Password"
                v-model="user.confirmPassword"
                required
              />
            </div>
            <button
              class="submit"
              type="button"
              @click="submitSignUp()"
              :disabled="v$.user.$invalid"
            >
              Create account
            </button>
          </div>
          <div class="social-media">
            <h2>Sign up with</h2>
            <div class="inner-social-media">
              <button href="#" class="google btn">
                <img src="../images/search.png" alt="" /> Sign up with Google
              </button>
              <button href="#" class="facebook btn">
                <img src="../images/basil_facebook-solid.svg" alt="" /> Sign up with Facebook
              </button>
              <button href="#" class="twitter btn">
                <img src="../images/mdi_twitter.svg" alt="" /> Sign up with Twitter
              </button>
            </div>
          </div>
          <div class="foot">
            <router-link to="/signin" class="btn foot-btn"
              >Already have an account?<strong>Sign in </strong></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const url_path = 'api/createskeepuser'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$")
  if (validNamePattern.test(name)) {
    return true
  }
  return false
}

export default {
  name: 'Signup',
  props: {},
  components: { VueDatePicker },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      user: {
        email: { required, email },
        password: { required, min: minLength(6) },
        confirmPassword: { required }
      }
    }
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
        confirmPassword: null,
        DateOfBirth: null,
        Gender: null
      },
      interval: null,
      date: null
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'MyProfile' })
    },
    handleDate: function (modelData) {
      var d = new Date(modelData),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      const finalDate = [year, month, day].join('-')

      this.user.DateOfBirth = finalDate
    },
    submitSignUp: async function () {
      const jsonData = JSON.stringify(this.user)

      console.log(jsonData)

      const data = await SkipAPI.store(url_path, jsonData)

      const getData = JSON.parse(data)

      console.log(getData)

      if (getData.responseCode === 0) {
        this.$toast.error(getData.responseMsg, {
          type: 'error',
          position: 'top',
          dismissible: false,
          max: 1
        })
      } else {
        this.$toast.success(getData.responseMsg, {
          type: 'success',
          position: 'top',
          dismissible: false,
          max: 1
        })
        setTimeout(function () {
          location.reload()
        }, 1000)
        /* setInterval(() => {
                      this.$router.push({name:'MyProfile', params: {id: getData.userID}})
                   }, 2600); */
      }
    },
    submitSignin: function () {
      this.$router.push({ name: 'Signin' })
    }
  }
}
</script>

<style scoped>
@import url('../assets/Signup.css');
</style>
