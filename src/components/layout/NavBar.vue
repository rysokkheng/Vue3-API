<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="navbar_expand_lg" v-if="user">
       <span class="datimes"></span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item profile">  <router-link to="/profiles" >Profiles</router-link></li>
            <li class="nav-item active"> 
                 <a href="javascript:void(0)" @click="handleClick" ><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i><span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
     name : 'NavBar',
     methods : {
      handleClick(){
        localStorage.removeItem('token');
        this.$store.dispatch('user',null);
        this.$router.push('/login');
      }
    },
    computed : {
      ...mapGetters(['user'])
    }
}
</script>