<template>
  <div class="row top-main">
    <div class="col-3 left">
      <div class="txt">
        <div class="img-height">
          <img src="../images/skeepw.png" alt="" class="main-img" />
          <h2>Copy Skeep Link</h2>
          <h2>Skeep Chat</h2>
          <h2>Explore</h2>
          <h2>About You</h2>
          <h2>Edit Profile</h2>
        </div>
      </div>
    </div>
    <div class="col right">
      <div class="inner-main-right">
        <div class="image-container">
          <div class="row">
            <div class="col padding-0">
              <div class="height-100 input-upload d-flex justify-content-center align-items-center">
                <img
                  src="../images/photo-camera-svgrepo-com.svg"
                  alt=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
                <!-- Modal -->
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <div
                    class="height-100 input-upload2 d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="../images/photo-camera-svgrepo-com.svg"
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <!-- Modal -->
                  </div>
                </div>
                <div class="col">
                  <div
                    class="height-100 input-upload2 d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="../images/photo-camera-svgrepo-com.svg"
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <!-- Modal -->
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <div
                    class="height-100 input-upload2 d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="../images/photo-camera-svgrepo-com.svg"
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <!-- Modal -->
                  </div>
                </div>
                <div class="col">
                  <div
                    class="height-100 input-upload2 d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="../images/photo-camera-svgrepo-com.svg"
                      alt=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <!-- Modal -->
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div class="information-container">
          <h2>Daniel Oluwatosin Ogabi</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
import dateFormat, { masks } from 'dateformat'
// import FileUpload from "@/components/FileUpload.vue";

export default {
  name: 'MyProfile',
  data() {
    return {
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

    submitPicture: async function () {}
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
@import url('../assets/MyProfile.css');
/* @import '../node_modules/vue-anka-cropper/dist/VueAnkaCropper.css'; */
</style>
