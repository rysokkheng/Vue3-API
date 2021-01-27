import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


const routes = [
        {path : '/' , component : Home},
        {path : '/login',component : Login},
        {path : '/register',component : Register},
    
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;