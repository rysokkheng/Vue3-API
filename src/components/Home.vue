<template>
   <div id="home">
      <h3 v-if="user">Hi , {{user.username}} </h3>
   </div>
</template>
<script>

import {mapGetters} from 'vuex'

export default {
    name : 'Home',

    computed :{
       ...mapGetters(['user'])
    }

    
}
</script>