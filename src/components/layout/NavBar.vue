<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="navbar_expand_lg" v-if="user">
       <div class="timezone">{{time}}</div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item profile">  <router-link to="/profiles" >Profiles</router-link></li>
            <li class="nav-item active profile"> 
                 <a href="javascript:void(0)" @click="handleClick" >SignOut<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
</template>
<script>
import {mapGetters} from 'vuex'
import moment from 'moment'

export default {
     name : 'NavBar',
      data () {
      return {
         date: moment()
      }
    },

     methods : {
      handleClick(){
        localStorage.removeItem('token');
        localStorage.removeItem('expires_in');
        this.$store.dispatch('user',null);
        this.$router.push('/login');
      }
    },

    computed : {
      ...mapGetters(['user']),
      time: function(){
        return this.date.format('MMMM Do YYYY, h:mm:ss a');
      }
    },
     mounted: function(){   
      setInterval(() => {
        this.date = moment(this.date.add(1, 'seconds'))
      }, 1000);
    }
}
</script>