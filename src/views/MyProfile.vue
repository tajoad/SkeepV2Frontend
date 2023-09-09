<template>
  <div class="row top-main">
    <div class="col-3 left">
      <div class="row img-height">
        <div class="col img">
          <img src="../images/skeepw.png" alt="" class="main-img" />
        </div>
        <div class="col top-nav">
          <nav class="navbar navbar-light navbar-expand-lg">
            <div class="flex-column">
              <button
                class="navbar-toggler nav-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse navv2 flex-column" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 navv flex-column mb-lg-0">
                  <li class="nav-item py-2">
                    <a class="nav-link text-white active" aria-current="page" href="#"
                      >Copy Skeep Link</a
                    >
                  </li>
                  <li class="nav-item py-2">
                    <a class="nav-link text-white" href="#">Skeep Chat</a>
                  </li>
                  <li class="nav-item py-2">
                    <a class="nav-link text-white" href="#">Explore</a>
                  </li>
                  <li class="nav-item py-2">
                    <a class="nav-link text-white" href="#">About You</a>
                  </li>
                  <li class="nav-item py-2">
                    <a class="nav-link text-white" href="#">Edit Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="col right">
      <div class="inner-main-right">
        <div class="image-container">
          <section>
            <div class="">
              <div class="img-container-grid">
                <div class="smallsquare">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
                    class="img-grid-c"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </div>
                <div class="bigsquare">
                  <img
                    src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    class="img-grid-c"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </div>
                <div class="bigsquare_blank">
                  <div class="inner_square">
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg" class="img-grid-c" />
                  </div>
                  <div class="inner_square">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-oo8-jn28YVesncpNZ4cBHocvHtKLwzmpVDbq1k7KNa5jEiL"
                      class="img-grid-c"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </div>
                  <div class="inner_square">
                    <img
                      src="https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg"
                      class="img-grid-c"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </div>
                  <div class="inner_square">
                    <img
                      src="https://www.w3schools.com/howto/img_snow.jpg"
                      class="img-grid-c"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Uploading a new photo</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p class="body-desc">
                    It will be easier for your friends to recognize you if you upload your real
                    photo. You can upload the image in JPG, GIF or PNG format.
                  </p>
                  <div class="photo-input">
                    <input type="file" id="loadFile" onchange="console.log(this.files[0].name);" />
                    <button
                      class="btn btn-sm btn-primary"
                      onclick="document.getElementById('loadFile').click()"
                    >
                      Select a file
                    </button>
                  </div>
                </div>
                <div class="modal-footer">
                  <p class="footer-title">
                    If you're having problems uploading, try choosing a smaller photo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row information-container mt-5">
          <div class="name">
            <h2>{{ this.getName }}</h2>
          </div>

          <div class="row inner">
            <div class="col p-4 inner-inner" v-for="item in this.getAns">
              {{ item.Answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
import dateFormat, { masks } from 'dateformat'
const getAnswer = 'getanswers'
// import FileUpload from "@/components/FileUpload.vue";

export default {
  name: 'MyProfile',
  data() {
    return {
      getAns: [],
      getName: null,
      user: {
        Name: null,
        Gender: null,
        Occupation: null,
        CityOfResidence: null,
        DateOfBirth: null,
        img: null
      },
      formFields: {
        picture: null,
        imagePreview: null,
        showPreview: false
      }
    }
  },
  methods: {
    redirectToAboutyou: function () {
      this.$router.push({ name: 'Aboutyou' })
    },
    getUserInfo: async function () {
      const user = this.$route.params.id
    },
    onFileChange(event) {
      this.formFields.picture = event.target.files[0]
      console.log(this.formFields.picture)
    },
    getAnswers: async function () {
      const getid = {
        Personid: this.$route.params.id
      }
      const convertData = JSON.stringify(getid)
      const res = await SkipAPI.store(getAnswer, convertData)
      const convertAns = JSON.parse(res)
      this.getName = convertAns[0].Answer
      const result2 = convertAns ? convertAns.filter((answer) => answer.Questionid > '1') : []
      const result3 = result2.sort((s1, s2) => {
        return s1.Questionid - s2.Questionid
      })
      console.log(result3)
      if (Array.isArray(result3)) {
        result3.forEach((element) => {
          this.getAns.push(element)
        })
      }
    },

    submitPicture: async function () {}
  },
  mounted() {
    this.getUserInfo()
    this.getAnswers()
  }
}
</script>

<style scoped>
@import url('../assets/MyProfile.css');
/* @import '../node_modules/vue-anka-cropper/dist/VueAnkaCropper.css'; */
</style>
