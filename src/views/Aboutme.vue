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
        <div class="inptags">
          <div class="row inner-right-col">
            <div class="col questions-cat">
              <div v-for="(item, index) in Questions" :key="item._id">
                <div
                  v-if="
                    item.Q_id == '1' &&
                    item._id !== '64da391a1270944dfd7ce072' &&
                    item._id != '64da3f551270944dfd7ce080'
                  "
                >
                  <input
                    type="text"
                    :placeholder="item.Question"
                    :value="content"
                    @change="updateValue"
                    :id="item._id"
                  />
                </div>
                <div v-if="item.Q_id == '1' && item._id == '64da391a1270944dfd7ce072'">
                  <span class="datepicker-toggle">
                    <span class="datepicker-toggle-button"></span>
                    <input
                      type="text"
                      onfocus="(this.type='date')"
                      :placeholder="item.Question"
                      :value="content"
                      @change="updateValue"
                      :id="item._id"
                    />
                  </span>
                </div>
                <div v-if="item.Q_id == '1' && item._id == '64da3f551270944dfd7ce080'">
                  <input
                    type="text"
                    :placeholder="item.Question"
                    :value="content"
                    @change="updateValue"
                    :id="item._id"
                  />
                </div>
                <div class="chk">
                  <div class="" v-if="item.Q_id == '2'">
                    <input
                      type="text"
                      :placeholder="item.Question"
                      :value="content"
                      @change="updateValue"
                      :id="item._id"
                    />
                  </div>
                  <div class="" v-if="item.Q_id == '5'">
                    <input
                      type="text"
                      :placeholder="item.Question"
                      :value="content"
                      @change="updateValue"
                      :id="item._id"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col questions-cat">
              <div class="form-setup">
                <div class="input">
                  <div class="mini" v-for="(item, index) in Questions" :key="item._id">
                    <div v-if="item.Q_id == '3'">
                      <input
                        type="text"
                        :placeholder="item.Question"
                        :value="content"
                        @change="updateValue"
                        :id="item._id"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn">
            <button class="btn done" @click="submitAboutMe()">Done</button>
            <button class="btn add-questions">Add questions</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const abt_path = 'aboutme'
const url_path = 'api/skeepanswer'
const get_count = 'https://countriesnow.space/api/v0.1/countries/population/cities'
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
      userid: this.$route.params.id,
      countries: null
    }
  },
  methods: {
    redirectToProfile: function (id) {
      this.$router.push({ name: 'MyProfile' })
    },
    submitAboutMe: async function () {
      const convertData = JSON.stringify(val)

      console.log(convertData)

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
      this.Questions = userData
    },
    getCountries: async function () {
      const countries = await SkipAPI.getCountries(get_count)
      const userData = JSON.parse(countries)
      userData.data.forEach((element) => {
        this.countries = element.country
      })
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
