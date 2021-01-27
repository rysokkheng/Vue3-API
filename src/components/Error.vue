<template>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {{error}}
      </div>
</template>
<script>
export default {
    name : 'Error',
    props : ['error']

}
</script>