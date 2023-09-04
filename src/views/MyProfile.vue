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
