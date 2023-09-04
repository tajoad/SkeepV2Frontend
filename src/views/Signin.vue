<template>
  <div class="container">
    <div class="container-fluid">
      <div class="row row-cols-1 main">
        <div class="col top">
          <img src="../images/skeep3.png" alt="" />
        </div>
        <div class="col">
          <div class="inner-right">
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
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="v$.user.password.$model"
                    required
                    autocomplete="new-password"
                  />
                  <img
                    src="../images/password.svg"
                    alt=""
                    class="pass-img"
                    @click="togglePassword()"
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
                class="submit"
                type="button"
                @click="submitSignIn()"
                :disabled="v$.user.$invalid"
              >
                Sign In
              </button>
            </div>
            <div class="foot">
              <div class="foot-txt">
                Don’t have an account?
                <router-link to="/signup" class="btn foot-btn"
                  ><strong>Sign Up </strong></router-link
                >
              </div>
              <div class="foot-txt">
                <router-link to="/forgotpassword" class="btn foot-btn forgot-pwd"
                  >Forgot password?</router-link
                >
              </div>
            </div>
          </div>
        </div>
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
    redirectToProfileorAboutMe: function () {},
    togglePassword: function () {
      const password = document.querySelector('#password')
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
      password.setAttribute('type', type)
      // toggle the eye icon
      this.classList.toggle('fa-eye')
      this.classList.toggle('fa-eye-slash')
    }
  }
}
</script>

<style scoped>
@import url('../assets/Signin.css');
</style>
