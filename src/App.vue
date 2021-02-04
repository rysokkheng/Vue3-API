<template>
 <div id="app">
   <div class="d-flex" id="wrapper">
     <SideBar/>
     <div id="page-content-wrapper">
       <NavBar/>
      <div class="auth-wrapper">
        <div class="auth-inner">
          <router-view />
        </div>
      </div>
     </div>
   </div>
 </div>
</template>
<script>

import axios from 'axios'
import SideBar from './components/layout/SideBar'
import NavBar from './components/layout/NavBar'

export default {
  name: 'App',
  components : {
    SideBar,
    NavBar
  }, 
 
    async created(){
       const response = await axios.get('users/profiles');
       this.$store.dispatch('user',response.data.data.data);
    }
}
</script>
