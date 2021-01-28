import { createWebHistory, createRouter } from "vue-router";
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Products from './pages/products/index'
import Permissions from './pages/permissions/index'
import Roles from './pages/roles/index'
import Users from './pages/users/index'
import Profiles from './pages/auth/Profiles'

const routes = [
        {path : '/' , component : Dashboard},
        {path : '/login',component : Login},
        {path : '/register',component : Register},
        {path : '/products',component : Products},
        {path : '/permissions',component : Permissions},
        {path : '/roles',component : Roles},
        {path : '/users',component : Users},
        {path : '/profiles',component : Profiles},
    
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;