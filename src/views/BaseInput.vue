<template>
	      <div class="container-fluid cont d-flex justify-content-center">
                   <div class="all-cont">
                   <div class="header">
                       
                   </div>
                   <div class="main">
                       <div class="d-flex justify-content-between align-items-center mb-2">
                           <h4 class="text-right">About Me</h4>
                       </div>
                       <div v-for="(item, index) in Questions" :key="item.id">
                            <div class="col mb-2 input" ><input type="text" class="form-control" :placeholder="item.Question" :value="content" @change="updateValue" :id="item.id" ></div>
                        </div>
                       <div class="col-md border-right">
                               <div class="btn-abt"><button class="btn profile-button" type="button" @click="this.submitAboutMe()">Done</button></div>
                       </div>
                   </div>
           </div>
       </div>
</template>

<script>
import SkipAPI from '../../api/resources/SkipAPI'
const url = "http://localhost:3002/aboutme"
const getQuestions = "http://localhost:3002/getquestions";

const val = [];
export default {
 name: "BaseInput",
 props: {
        content:String,
        id: String,
      },
setup(props, context ) {
    const updateValue = (event) => {
      let id = event.target.id;
      let content = event.target.value;
      console.log(id);
      console.log(content);
        context.emit(`update:${content}`, event.target.value)
        context.emit(`update:${id}`, event.target.id)
    }

    return{
      updateValue
    }
},
 data() {
     return{  
          user: {
                Name: null,
                DateOfBirth: null,
                CityOfResidence: null,
                Gender: null,
                Height: null,
                Religion: null,
                Occupation: null,
                Genotype: null,
                Nationality: null,
                Hobbies: null,
                FavoriteFood: null,
                FavoriteMusician: null,
                MoreAboutYourself: null
            },
         interval:null,
         Questions: null,
         answer: null,
         selected_options: []
     }
 },
 methods:{
     redirectToProfile: function(id) {
         this.$router.push({name:'MyProfile'}); 
     },
     submitAboutMe: async function() {


        //  const jsonData= JSON.stringify(this.user);

        console.log(id);
      console.log(content);

         /*const data = await SkipAPI.store( url, jsonData );

         const getData = JSON.parse(data);

         console.log(getData);

         if (getData.responseCode === 0){
               this.$toast.error(getData.responseMsg,  {
                                type: 'error',
                                position: 'top',
                                dismissible:false,
                                max:1
                         });
             } else {
                 this.$toast.success(getData.responseMsg,  {
                               type: 'success',
                               position: 'top',
                               dismissible:false,
                               max:1
                 });
                 setInterval(() => {
                    this.$router.push({name:'MyProfile', params: {id: getData.userID}})
                 }, 2600);
         }*/
     },
     updateValue(event) {
      let id = event.target.id;
      let content = event.target.value;
      const getVal = {
        value: content,
        id : id
      }
      console.log(id);
      console.log(content);
      val.push(getVal)
      console.log(val);
        this.emit(`update:${content}`, event.target.value)
        this.emit(`update:${id}`, event.target.id)
    },
     getQuestion: async function() {
         const data = await SkipAPI.indexOnly(getQuestions);

         const userData = JSON.parse(data);
         this.Questions = userData;
     },
     handleChange: function (value,id) {
         const getUserAnswers = {
              answer: value,
              questionid : id
         }
         this.answer = getUserAnswers;
     }, 
     dataFieldClass: function (e, otherArgument) {
          const element = e;
          console.log(otherArgument);
          console.log(element);
     }
 },
 mounted() {
     this.getQuestion();
 },
}
</script>

<style scoped>
 @import url('../assets/Aboutme.css');
</style>
