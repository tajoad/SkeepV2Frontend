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
              type="text"
              class=""
              placeholder="Name"
              :id="1"
              :value="users.Name"
              @input="users.Name = $event.target.value"
              @change="updateValue"
            />
            <input
              type="text"
              class=""
              placeholder="Date of Birth"
              :id="2"
              :value="users.DateOfBirth"
              @input="users.DateOfBirth = $event.target.value"
              @change="updateValue"
              onfocus="this.type='date'"
            />
            <input
              type="text"
              class=""
              placeholder="City of Residence"
              :id="3"
              :value="users.CityOfResidence"
              @input="users.CityOfResidence = $event.target.value"
              @change="updateValue"
            />
            <input
              type="text"
              class=""
              placeholder="Occupation"
              :id="4"
              :value="users.Occupation"
              @input="users.Occupation = $event.target.value"
              @change="updateValue"
            />
            <input
              type="text"
              class=""
              placeholder="Nationality"
              :id="5"
              :value="users.Nationality"
              @input="users.Nationality = $event.target.value"
              @change="updateValue"
            />
            <input
              type="text"
              class=""
              placeholder="Hobbies"
              :id="6"
              :value="users.Hobbies"
              @input="users.Hobbies = $event.target.value"
              @change="updateValue"
            />
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class=""
                  placeholder="Gender"
                  :value="users.Gender"
                  @input="users.Gender = $event.target.value"
                  @change="updateValue"
                  :id="7"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class=""
                  placeholder="Height"
                  :value="users.Height"
                  @input="users.Height = $event.target.value"
                  @change="updateValue"
                  :id="8"
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
                  v-model="input.Question"
                  type="text"
                  class="h-10 rounded-lg outline-none p-2"
                  placeholder="Type your new question"
                  :id="input.Questionid"
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
                  @click="removeField(index, extraQuestion, event)"
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
                v-model="input.Answer"
                type="text"
                class="h-10 rounded-lg outline-none p-2"
                placeholder="Give answer"
                :id="input.Questionid"
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
const url_path = 'answer'
const del_url_path = 'deleteanswers'
const getAnswer = 'getanswers'
const get_count = 'https://countriesnow.space/api/v0.1/countries/population/cities'

export default {
  name: 'BaseInput',
  props: {
    content: String,
    id: String
  },
  data() {
    return {
      extraQuestion: [
        { Answer: '', Question: '', Questionid: '', Personid: this.$route.params.id }
      ],
      dataToSend: null,
      val: [],
      retrieveExtraQues: null,
      userid: this.$route.params.id,
      countries: null,
      users: {
        Name: null,
        DateOfBirth: null,
        CityOfResidence: null,
        Occupation: null,
        Nationality: null,
        Hobbies: null,
        Gender: null,
        Height: null
      },
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
      this.extraQuestion.forEach((element) => {
        this.val.push(element)
      })

      console.log(this.val)
      if (Array.isArray(this.val) && this.val.length > 0) {
        const convertData = JSON.stringify(this.val)
        const res = await SkipAPI.store(url_path, convertData)
        const getData = JSON.parse(res)
        console.log(getData)
        if (getData.statusCode === 200) {
          this.$toast.success(getData.message, {
            type: 'success',
            position: 'top',
            dismissible: false,
            max: 1
          })
          /* setInterval(() => {
            this.$router.push({ name: 'MyProfile', params: { id: this.userid } })
          }, 3000)*/
        } else {
          this.$toast.error(getData.message, {
            type: 'error',
            position: 'top',
            dismissible: false,
            max: 1
          })
        }
      }
    },
    updateValue(event) {
      let id = event.target.id
      let content = event.target.value
      const getVal = {
        Answer: content,
        Question: '',
        Questionid: id,
        Personid: this.userid
      }
      this.val.push(getVal)
    },
    getAnswer: async function () {
      const getid = {
        Personid: this.userid
      }
      const convertData = JSON.stringify(getid)
      const res = await SkipAPI.store(getAnswer, convertData)
      const userData = JSON.parse(res)
      const result3 = userData ? userData.filter((question) => question.Questionid > '8') : []
      console.log(result3)
      if (result3.length > 0) {
        this.extraQuestion[0].Question = result3[0].Question
        this.extraQuestion[0].Answer = result3[0].Answer
        this.extraQuestion[0].Questionid = result3[0].Questionid
        const otherElements = result3.slice(1)
        otherElements.forEach((element) => {
          this.extraQuestion.push(element)
        })
      }
      userData.forEach((element) => {
        switch (element.Questionid) {
          case 1:
            this.users.Name = element.Answer
            break
          case 2:
            this.users.DateOfBirth = element.Answer
            break
          case 3:
            this.users.CityOfResidence = element.Answer
            break
          case 4:
            this.users.Occupation = element.Answer
            break
          case 5:
            this.users.Nationality = element.Answer
            break
          case 6:
            this.users.Hobbies = element.Answer
            break
          case 7:
            this.users.Gender = element.Answer
            break
          case 8:
            this.users.Height = element.Answer
            break
          default:
            break
        }
      })
    },
    getCountries: async function () {
      const countries = await SkipAPI.getCountries(get_count)
      const userData = JSON.parse(countries)
      userData.data.forEach((element) => {
        this.countries = element.country
      })
    },
    addField(value, fieldType, event) {
      if (event) {
        event.preventDefault()
      }
      fieldType.push({ Answer: '', Question: '', Questionid: '', Personid: this.$route.params.id })
    },
    removeField(index, fieldType) {
      this.delQueAns(fieldType[index].Questionid)
      fieldType.splice(index, 1)
    },
    delQueAns: async function (Questionid) {
      const getPerson = {
        Personid: this.userid,
        Questionid: Questionid
      }
      const delData = JSON.stringify(getPerson)
      const delres = await SkipAPI.store(del_url_path, delData)
      console.log(delres)
    }
  },
  mounted() {
    this.getAnswer()
    this.getCountries()
  }
}
</script>

<style scoped>
@import url('../assets/Aboutme.css');
</style>
