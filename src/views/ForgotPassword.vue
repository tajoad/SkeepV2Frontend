<template>
  <div class="container">
    <div class="container-fluid">
      <div class="row main">
        <div class="col-6 col-md-4 left">
          <h2>Forgot Password</h2>
          <p>No worries, we’ll send you reset instructions</p>
          <div class="inner-left">
            <div class="inptags">
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
            <button
              class="submit"
              type="button"
              @click="submitEmail()"
              :disabled="v$.user.$invalid"
            >
              Reset Password
            </button>
            <router-link to="/signin" class="btn foot-btn forgot-pwd">Back to Sign In</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const url_path = 'api/getkeepuser'
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
  name: 'ForgotPassword',
  props: {},
  components: { VueDatePicker },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      user: {
        email: { required, email }
      }
    }
  },
  data() {
    return {
      user: {
        email: null
      }
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'Signin' })
    },
    submitEmail: async function () {
      // wait for your command
    }
  }
}
</script>

<style scoped>
@import url('../assets/ForgotPassword.css');
</style>
