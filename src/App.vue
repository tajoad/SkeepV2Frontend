<script setup>
import { RouterView } from 'vue-router';
import vueAnkaCropper from 'vue-anka-cropper'
import Datepicker from 'vuejs-datepicker';
</script>



<template>
  <RouterView></RouterView>
</template>
<script>


export default {
    components: {vueAnkaCropper},
    Datepicker
}
</script>

<style scoped>
  /* @import '../node_modules/vue-anka-cropper/dist/VueAnkaCropper.css'; */
</style>
