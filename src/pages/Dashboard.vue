<template>
    <div v-if="user">
        <div>
            <h1>DashBoard</h1>
        </div>
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
