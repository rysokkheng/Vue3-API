import { createApp } from 'vue'
import App from './App.vue'
import router from  './router'
import store from './vuex'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Phnom_Penh')
import './axios'
import './assets/css/simple-sidebar.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(store).mount('#app')

export default router