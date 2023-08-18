import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster';


// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


/*
    Bootstrap CSS, JS
*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App)

app.use(router);
app.use(Toaster);

app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
