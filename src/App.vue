<template>
<div class="d-flex" id="wrapper">
         <!-- Sidebar -->
           <Sidebar></Sidebar>
        <!-- /#sidebar-wrapper -->
         <div id="page-content-wrapper">
           <Navbar></Navbar>
            <router-view />
         </div>
    </div>

</template>
<script>
import Sidebar from '@/views/Layouts/Sidebar.vue';
import Navbar from '@/views/Layouts/Navbar.vue'
export default {
    components: {
    Sidebar,
    Navbar
  }
}
</script>
<style>
#app {
     font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
