import { createApp } from 'vue'
import App from './App.vue'
import router from  './router'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Phnom_Penh')
import JwPagination from 'jw-vue-pagination';

import './axios'
import store from './vuex'
import './assets/css/simple-sidebar.css'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).use(router).use(store).use(JwPagination).mount('#app')
