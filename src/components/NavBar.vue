<template>
<div id="navbar">
     <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="user">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
             <router-link to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0" v-if="!user">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
           <router-link to="/login">LogIn</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/register">Register</router-link>
          </li>
          </ul>
        </div>
         <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" >Logout</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
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
<style>
  .nav-item a{
    text-decoration: none;
    padding: 10px;
    color: black;
  }
</style>