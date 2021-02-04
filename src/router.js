import { createWebHistory, createRouter} from "vue-router";
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Products from './pages/products/index'
import Permissions from './pages/permissions/index'
import Roles from './pages/roles/index'
import Users from './pages/users/index'
import Profiles from './pages/auth/Profiles'
import Setting from './pages/setting/index'
import CreatePermission from './pages/permissions/create'

const routes = [
        {path : '/' ,  name: 'dashboard', component : Dashboard,
        meta: {
                requiresAuth: true
            }},
        {path : '/login', name: 'login', component : Login ,
        meta: {
                guest: true
            }},
        {path : '/register',component : Register,
        meta: {
                guest: true
            }},
        {path : '/profiles',component : Profiles,
        meta: {
                requiresAuth: true
            }},
        {path : '/products',component : Products,
        meta: {
                requiresAuth: true
            }},
        {path : '/permissions',component : Permissions ,
        meta: {
                requiresAuth: true
            }},
        {path : '/permissions/create',component : CreatePermission },
        {path : '/roles',component : Roles ,
        meta: {
                requiresAuth: true
            }},
        {path : '/users',component : Users ,
        meta: {
                requiresAuth: true
            }},
        {path : '/setting',component : Setting ,
        meta: {
                requiresAuth: true
            }},
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
        if(to.matched.some(record => record.meta.requiresAuth)) {
            if (localStorage.getItem('token') == null) {
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                let user = JSON.parse(localStorage.getItem('user'))
                if(to.matched.some(record => record.meta.is_admin)) {
                    if(user.is_admin == 1){
                        next()
                    }
                    else{
                        next({ name: 'dashboard'})
                    }
                }else {
                    next()
                }
            }
        } else if(to.matched.some(record => record.meta.guest)) {
            if(localStorage.getItem('token') == null){
                next()
            }
            else{
                next({ name: 'dashboard'})
            }
        }else {
            next()
        }
    })
  export default router;