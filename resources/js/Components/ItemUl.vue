
<script setup>
defineProps({
  
    nombreItem: {
      type: String,
      required: true,
    },
    link: {
      type:String,
      required: true,
    },
    Icono: {
      type: String,
      required: true,
    },

    
});
</script>
<template lang="">

    <li class="nav-item">
                  <a :href="link" class="nav-link">
                    <i :class="Icono"></i>
                    <p>{{ nombreItem }}</p>
                  </a>
                </li>
              
            

</template>

<style lang="">
    
</style>