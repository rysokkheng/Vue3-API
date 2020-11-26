import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/css/simple-sidebar.css';
import '@/assets/vendor/jquery/jquery.min.js';
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


createApp(App)
.use(VueAxios, axios)
.use(router)
.mount('#app');
