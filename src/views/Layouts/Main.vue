<template>
    <div class="d-flex" id="wrapper">
         <!-- Sidebar -->
           <Sidebar></Sidebar>
        <!-- /#sidebar-wrapper -->
         <div id="page-content-wrapper">
           <Navbar></Navbar>
           sss
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