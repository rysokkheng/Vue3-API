import { createWebHistory, createRouter } from "vue-router";
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


const routes = [
        {path : '/' , component : Dashboard},
        {path : '/login',component : Login},
        {path : '/register',component : Register},
    
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;