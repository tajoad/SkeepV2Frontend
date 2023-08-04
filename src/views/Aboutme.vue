<template>
  <div class="container-fluid px-0 cont d-flex justify-content-center">
    <div class="all-cont">
      <div class="header"></div>
      <div class="main">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h4 class="text-right">About Me</h4>
        </div>
        <div v-for="(item, index) in Questions" :key="item.id">
          <div class="col mb-2 input">
            <input
              type="text"
              class="form-control"
              :placeholder="item.Question"
              :value="content"
              @change="updateValue"
              :id="item.id"
            />
          </div>
        </div>
        <div class="col-md border-right">
          <div class="btn-abt">
            <button class="btn profile-button" type="button" @click="this.submitAboutMe()">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const abt_path = 'aboutme'
const url_path = 'answers'
const ques_path = 'getquestions'

const val = []
export default {
  name: 'BaseInput',
  props: {
    content: String,
    id: String
  },
  data() {
    return {
      Questions: null,
      dataToSend: null,
      userid:this.$route.params.id
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'MyProfile' })
    },
    submitAboutMe: async function () {
      const convertData = JSON.stringify(val)

      const data = await SkipAPI.store(url_path, convertData)

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
        setInterval(() => {
          this.$router.push({ name: 'MyProfile', params: { id: this.userid } })
        }, 3000)
      }
    },
    updateValue(event) {
      let id = event.target.id
      let content = event.target.value
      const getVal = {
        value: content,
        id: id,
        userid: this.userid
      }
      val.push(getVal)
    },
    getQuestion: async function () {
      const data = await SkipAPI.indexOnly(ques_path)

      const userData = JSON.parse(data)
      this.Questions = userData
    }
  },
  mounted() {
    this.getQuestion()
  }
}
</script>

<style scoped>
@import url('../assets/Aboutme.css');
</style>
