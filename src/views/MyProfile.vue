<template>
    <div class="container-fluid cont d-flex justify-content-center">
            <div class="col-md-4 border-right">
                <div class="">
                    <div class="all-cont">
                    <div class="header">
                        yes
                    </div>
                    <div class="main align-items-center">
                        <div class="">
                            <h4 class="text-right">My Profile</h4>
                        </div>
                        <div class="align-items-center img">
                            <input type="file" name="picture" class="form-control inner-img" id="picture" @change="onFileChange">
                            <img v-bind:src="imagePreview" width="100" height="100" v-show="showPreview"/>
                        </div>
                        <div class="align-items-center">
                        <span class="my-profile-text02">
                            <span class="my-profile-text03">
                              <span>{{this.user.Name}}</span>
                              <br />
                              <span></span>
                            </span>
                            <span>
                              <span>{{this.user.Gender}} | {{this.user.DateOfBirth}} | {{this.user.CityOfResidence}}</span>
                              <br />
                              <span>{{this.user.Occupation}}</span>
                            </span>
                        </span>
                       </div>
                        <div class="col-md profile-btn border-right">
                            <div class="mt-3 text-center"><button class="btn btn-primary rounded-0 profile-button" type="button">View More</button></div>
                            <div class="mt-3 text-center"><button class="btn btn-primary rounded-0 profile-button" type="button" @click="this.submitPicture()">About You</button></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
  </template>
  
  <script>
    import SkipAPI from '../../api/resources/SkipAPI';
    import dateFormat, { masks } from "dateformat";
    // import FileUpload from "@/components/FileUpload.vue";

  export default {
    name: 'MyProfile',
    data() {
        return {
            user: {
                    Name: null,
                    Gender: null,
                    Occupation: null,
                    CityOfResidence:null,
                    DateOfBirth: null,
                    img: null
            },
            formFields: {
                picture: null,
                imagePreview: null,
                showPreview: false,
            },
        }
    },
    methods:{
       redirectToAboutyou: function() {
           this.$router.push({name:'Aboutyou'}); 
       },
       getUserInfo: async function() {

        const user = this.$route.params.id;

       /* const url = `http://localhost:3002/getusers/${user}`;

        const data = await SkipAPI.indexOnly(url);

        const changeData = JSON.parse(data);

        console.log(changeData[0].name);

        this.user.Name = changeData[0].name;

        this.user.Gender = changeData[0].Gender;

        this.user.Occupation = changeData[0].Occupation;

        this.user.CityOfResidence = changeData[0].CityOfResidence;

        const now = new Date();

        const newNow= dateFormat(now, "dS mmmm");

        this.user.DateOfBirth = newNow;*/
        
       },
       onFileChange(event){
        this.formFields.picture = event.target.files[0];
        console.log(this.formFields.picture);
       },

       submitPicture: async function(){
            /*
            Initialize a File Reader object
            */
            let reader  = new FileReader();

            /*
            Add an event listener to the reader that when the file
            has been loaded, we flag the show preview as true and set the
            image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.imagePreview = reader.result;
            }.bind(this), false);

            /*
            Check to see if the file is not empty.
            */
            if( this.formFields.picture ){
                /*
                    Ensure the file is an image file.
                */
                if ( /\.(jpe?g|png|gif)$/i.test( this.formFields.picture.name ) ) {

                    const user = this.$route.params.id;

                    /*const picture = JSON.stringify(this.formFields.picture);

                    const url = `http://localhost:3002/updatepicture/${user}`;

                    const data = await SkipAPI.updateData(url, picture);

                    const changeData = JSON.parse(data);

                    console.log(changeData);*/

                   /* console.log("here");
                    let x = document.getElementById('picture');
                    x.style.display = "none";*/
                    /*
                    Fire the readAsDataURL method which will read the file in and
                    upon completion fire a 'load' event which we will listen to and
                    display the image in the preview.
                    */
                    //reader.readAsDataURL(changeData);
                }
            }
        }
    },
    mounted() {
        this.getUserInfo();
    },
  }
  </script>
  
  <style scoped>
    @import url("../assets/MyProfile.css");
    /* @import '../node_modules/vue-anka-cropper/dist/VueAnkaCropper.css'; */
  </style>
  