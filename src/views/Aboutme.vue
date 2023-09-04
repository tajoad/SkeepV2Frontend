<template>
  <div class="row top-main">
    <div class="col-3 left">
      <div class="img-height">
        <img src="../images/skeepw.png" alt="" class="main-img" />
        <h2>Explore</h2>
      </div>
    </div>
    <div class="col-9 right">
      <div class="inner-main-right">
        <h2>About me</h2>
        <div class="row inner-right-col">
          <div class="col mb-2 input">
            <input
              v-for="(item, index) in firstQuestions"
              :key="item.id"
              type="text"
              class="form-control"
              :placeholder="item.Question"
              :value="content"
              @change="updateValue"
              :id="item.id"
            />
            <input
              v-for="(item, index) in SecondQuestions"
              :key="item.id"
              type="text"
              class="form-control"
              :placeholder="item.Question"
              :value="content"
              @change="updateValue"
              :id="item.id"
            />
            <div class="row">
              <div class="col">
                <input
                  v-for="(item, index) in thirdQuestions"
                  :key="item.id"
                  type="text"
                  class="form-control"
                  :placeholder="item.Question"
                  :value="content"
                  @change="updateValue"
                  :id="item.id"
                />
              </div>
              <div class="col">
                <input
                  v-for="(item, index) in fourthQuestions"
                  :key="item.id"
                  type="text"
                  class="form-control"
                  :placeholder="item.Question"
                  :value="content"
                  @change="updateValue"
                  :id="item.id"
                />
              </div>
            </div>
          </div>
          <div class="col mb-2 input">
            <div
              v-for="(input, index) in extraQuestion"
              :key="`${index}`"
              class="input wrapper flex items-center"
            >
              <div class="inp">
                <input
                  v-model="input.question"
                  type="text"
                  class="h-10 rounded-lg outline-none p-2"
                  placeholder="Type your new question"
                />
                <!--          Add Svg Icon-->
                <svg
                  @click="addField(input, extraQuestion)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="ml-2 cursor-pointer"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="green"
                    d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                  />
                </svg>

                <!--          Remove Svg Icon-->
                <svg
                  v-show="extraQuestion.length > 1"
                  @click="removeField(index, extraQuestion)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="ml-2 cursor-pointer"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#EC4899"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                  />
                </svg>
              </div>
              <input
                v-model="input.answer"
                type="text"
                class="h-10 rounded-lg outline-none p-2"
                placeholder="Give answer"
              />
            </div>
          </div>
        </div>
        <div class="set-btn mt-5">
          <button class="btn done" @click="submitAboutMe()">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const abt_path = 'aboutme'
const url_path = 'answers'
const extraQue_path = 'extra'
const get_count = 'https://countriesnow.space/api/v0.1/countries/population/cities'
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
      firstQuestions: null,
      SecondQuestions: null,
      thirdQuestions: null,
      fourthQuestions: null,
      extraQuestion: [{ personid: this.$route.params.id, question: '', answer: '' }],
      dataToSend: null,
      userid: this.$route.params.id,
      countries: null,
      user: {
        extraQuestions: null
      }
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'MyProfile' })
    },
    submitAboutMe: async function (event) {
      const convertData = JSON.stringify(val)

      const convertQues = JSON.stringify(this.extraQuestion)

      const data = await SkipAPI.store(url_path, convertData)

      const extraData = await SkipAPI.store(extraQue_path, convertQues)

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

      console.log(id)
      const getVal = {
        Answer: content,
        Questionid: id,
        Personid: this.userid
      }
      val.push(getVal)
    },
    getQuestion: async function () {
      const data = await SkipAPI.indexOnly(ques_path)

      const userData = JSON.parse(data)
      // this.Questions = userData

      const result1 = userData ? userData.filter((question) => question.groupNum == '1') : []
      const result2 = userData ? userData.filter((question) => question.groupNum == '2') : []
      const result3 = userData ? userData.filter((question) => question.groupNum == '3') : []
      const result4 = userData ? userData.filter((question) => question.groupNum == '4') : []

      this.firstQuestions = result1
      this.SecondQuestions = result2
      this.thirdQuestions = result3
      this.fourthQuestions = result4
      console.log(result1)

      console.log(result2)
    },
    getCountries: async function () {
      const countries = await SkipAPI.getCountries(get_count)
      const userData = JSON.parse(countries)
      userData.data.forEach((element) => {
        this.countries = element.country
      })
    },
    addField(value, fieldType) {
      fieldType.push({ personid: this.userid, question: '', answer: '' })
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1)
    }
  },
  mounted() {
    this.getQuestion()
    this.getCountries()
  }
}
</script>

<style scoped>
@import url('../assets/Aboutme.css');
</style>
