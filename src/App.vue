<template>
 <div id="app">
   <NavBar/>
   <div class="auth-wrapper">
     <div class="auth-inner">
      <router-view />
     </div>
   </div>
 </div>
</template>

<script>
import NavBar from './components/NavBar';
import axios from 'axios'
export default {
  name: 'App',
  components:{
    NavBar
  },
 
    async created(){
       const response = await axios.get('users/profiles');
       this.$store.dispatch('user',response.data.data.data);
      
    }
  
 
}
</script>
