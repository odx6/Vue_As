<script setup>
  import NaItem from '@/Components/SideNavItem.vue';
  import Item from '../Components/ItemUl.vue';
</script>
<template lang="">
 <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
           <NaItem nombre="Permisos" Icono1="nav-icon fas fa-tachometer-alt" Icono2="right fas fa-angle-left">  
            <Item nombreItem="Roles" Icono="far fa-circle nav-icon" link="roles"></Item>
            <Item nombreItem="Permisos" Icono="far fa-circle nav-icon" link="roles"></Item>
           </NaItem>
           <NaItem nombre="Menu 2 " Icono1="nav-icon fas fa-tachometer-alt" Icono2="right fas fa-angle-left"></NaItem>
         
           
          </ul>
        </nav>

</template>