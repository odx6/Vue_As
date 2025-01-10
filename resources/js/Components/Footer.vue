<template lang="">
   <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
        <b>{{ mensaje }}</b> {{ version}}
      </div>
      <strong>Copyright &copy; 2014-2021 <a :href="link">Sarusa</a>.</strong> All rights reserved.
    </footer>
</template>
<script>
export default {
    props:{
       mensaje:{
        type:String,
        requered:true,
       },
       version:{
        type:String,
        requered:true,
       },
       link:{
        type:String,
        requered:true,
       }

    }
    
}
</script>
<style lang="">
    
</style>