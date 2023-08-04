<template>
    <div class="container-fluid cont d-flex justify-content-center">
           <div class="col-md-4 border-right">
               <div class="">
                   <div class="all-cont">
                   <div class="header">
                       
                   </div>
                   <div class="main">
                       <div class="d-flex justify-content-between align-items-center mb-2">
                           <h4 class="text-right">Add Question</h4>
                       </div>
                       <div class="align-items-center"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Type Question"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Type Question"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Type Question" value=""></div>
                           <div class="col-md more-btn border-right">
                               <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="this.redirectToProfile()">Submit</button></div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
 </template>
 
 <script>
 export default {
   name: "MoreQuestions",
   props: {},
   methods:{
       redirectToProfile: function() {
           this.$router.push({name:'MyProfile'}); 
       }
   },
 }
 </script>
 
 <style scoped>
   @import url('../assets/MoreQuestions.css');
 </style>
 