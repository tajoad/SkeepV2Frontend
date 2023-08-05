<template>
  <div class="main">
    <div class="left">
      <img src="../asset/skeep1.png" alt="" class="img" />
      <p>Start the conversation</p>
      <div class="background"></div>
    </div>
    <div class="right">
      <div class="inner-right">
        <form autocomplete="off" action="" novalidate>
          <h2>Sign In</h2>
          <div class="inptags">
            <div class="form-setup">
              <div class="col mb-2 input">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  autocomplete="nope"
                  v-model="v$.user.email.$model"
                  required
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
                  class="form-control"
                  placeholder="Password"
                  autocomplete="new-password"
                  v-model="v$.user.password.$model"
                  required
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
            <button
              class="btn profile-button form-submit submit"
              type="button"
              @click="submitSignIn()"
              :disabled="v$.user.$invalid"
            >
              Sign In
            </button>
          </div>
          <div class="foot">
            <router-link to="/signup">
              Don't have an account?<strong> Sign up </strong></router-link
            >
          </div>
          <div class="foot">
            <router-link to="/signin"> forgot password?<strong> Click me</strong></router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const url_path = 'signin'
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
  name: 'Signin',
  props: {},
  components: { VueDatePicker },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      user: {
        email: { required, email },
        password: { required, min: minLength(6) }
      }
    }
  },
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'MyProfile' })
    },
    submitSignIn: async function () {
      const jsonData = JSON.stringify(this.user)

      console.log(this.user)

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
        if (getData.respSubmitted) {
          this.$router.push({ name: 'MyProfile', params: { id: getData.responseMsg } })
        } else {
          this.$router.push({ name: 'Aboutme', params: { id: getData.responseMsg } })
        }
      }
    },
    redirectToProfileorAboutMe: function () {}
  }
}
</script>

<style scoped>
@import url('../assets/Signin.css');
</style>
