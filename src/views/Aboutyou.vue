<template>
    <div class="container-fluid cont d-flex justify-content-center">
           <div class="col-md-4 border-right">
               <div class="">
                   <div class="all-cont">
                   <div class="header">
                       
                   </div>
                   <div class="main">
                       <div class="d-flex justify-content-between align-items-center mb-2">
                           <h4 class="text-right">About You</h4>
                       </div>
                       <div class="align-items-center"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Name"></div>
                           <div class="col mb-2 input"><input value="" class="form-control textbox-n" placeholder="Date of Birth" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="City of Residence" value=""></div>
                           <div class="row small-boxes">
                               <div class="col mb-2 input small-box2"><input type="text" class="form-control" placeholder="Gender" value=""></div>
                               <div class="col mb-2 input small-box1"><input type="text" class="form-control" placeholder="Height"></div>
                           </div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Religion"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Occupation"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Genotype  |  Blood Group" value=""></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Nationality"></div>
                           <div class="col mb-2 input"><input type="text" class="form-control" placeholder="Hobbies"></div>
                           <div class="col-md aboutyou-btn border-right">
                               <div class="text-center"><button class="btn btn-primary profile-button" type="button" @click="this.redirectToMoreQuestions()">Add Question</button></div>
                               <div class="text-center"><button class="btn btn-primary profile-button" type="button" @click="this.redirectToProfile()">Done</button></div>
                           </div>
                       </div>
               </div>
               </div>
           </div>
   </div>
 </template>
 
 <script>
 export default {
   name: "Aboutyou",
   props: {},
   methods:{
       redirectToProfile: function() {
           this.$router.push({name:'MyProfile'}); 
       },
       redirectToMoreQuestions: function() {
        this.$router.push({name:'MoreQuestions'}); 
       }
   },
 }
 </script>
 
 <style scoped>
   @import url('../assets/Aboutyou.css');
 </style>
 