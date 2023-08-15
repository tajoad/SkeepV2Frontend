<template>
  <div class="main">
    <h1>ABOUT ME</h1>
    <div class="inputs">
      <div class="mini" v-for="(item, index) in Questions" :key="item.id">
        <div v-if="item.Q_id == '1'">
          <input
            type="text"
            :placeholder="item.Question"
            :value="content"
            @change="updateValue"
            :id="item.id"
          />
        </div>
      </div>
      <div class="mini">
        <input type="text" placeholder="Date of birth" />
        <input type="text" placeholder="Favourite  Musician" />
      </div>
      <input type="text" placeholder="Country of residence" />
      <div class="mini2">
        <input type="text" placeholder="Gender" />
        <input type="text" placeholder="height" />
      </div>
      <input type="text" placeholder="Occupation" />
      <input type="text" placeholder="Nationality" />
      <input type="text" placeholder="Hobbies" />
    </div>
    <div class="enter">
      <a href="" class="done">Done</a>
      <a href="" class="ask">Add questions</a>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const abt_path = 'aboutme'
const url_path = 'answers'
const ques_path = 'api/skeepquestion'

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
      userid: this.$route.params.id
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
