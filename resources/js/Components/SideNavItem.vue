<script >
import Item from '../Components/ItemUl.vue';
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    Icono1: {
      type: String,
      required: true,
    },
    Icono2: {
      type: String,
      required: true,
     
    },

  },
  components:{
    Item,
  }
};
</script>
<template lang="">
    <li class="nav-item">
              <a href="#" class="nav-link">
                <i :class="Icono1"></i>
                <p>
                  {{nombre}}
                  <i :class="Icono2"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <slot/>
               
              </ul>
            </li>
</template>

<style lang="">
    
</style>