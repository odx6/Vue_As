<template lang="">
   <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>{{titulo}}</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Layout</a></li>
                <li class="breadcrumb-item active">Fixed Layout</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>
</template>
<script>
export default {
    props:{
        titulo:{
        Type:String,
        requered:true,
        }

    }
}
</script>
<style lang="">
    
</style>