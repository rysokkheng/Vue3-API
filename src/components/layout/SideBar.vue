<template>
   <!-- Sidebar -->
   <div id="main" v-if="user">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading"><img src="@/assets/logo.png" width="60" height="60"></div>
      <div class="list-group list-group-flush ative">
          <router-link to="/" class="list-group-item list-group-item-action bg-light"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Dashboard</router-link>
          <router-link to="/products" class="list-group-item list-group-item-action bg-light"><i class="fa fa-product-hunt fa-fw" aria-hidden="true"></i>&nbsp;Products</router-link>
          <router-link to="/users" class="list-group-item list-group-item-action bg-light"><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp;Users</router-link>
          <router-link to="/roles" class="list-group-item list-group-item-action bg-light"><i class="fa fa-lock fa-fw" aria-hidden="true"></i>&nbsp;Roles</router-link> 
          <router-link to="/permissions" class="list-group-item list-group-item-action bg-light"><i class="fa fa-product-hunt fa-fw" aria-hidden="true"></i>&nbsp;Permissions</router-link>
          <router-link to="/setting" class="list-group-item list-group-item-action bg-light"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp;Setting</router-link>
      </div>
    </div>
   </div>
    <!-- /#sidebar-wrapper -->
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name : 'SideBar',
  computed : {
      ...mapGetters(['user'])
   }
    
}
</script>