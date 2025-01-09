<script setup>
import { ref } from 'vue';

import Nav from '@/Components/Nav.vue';
import logo  from 'admin-lte/dist/img/AdminLTELogo.png';
import user  from 'admin-lte/dist/img/avatar5.png';
import Sidebar  from '@/Components/SideBar.vue';
import Footer  from '@/Components/Footer.vue';
import ContentHeader  from '@/Components/ContentHeader.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import SideBar from '@/Components/SideBar.vue';
import Aside from '@/Components/Asid.vue';

const showingNavigationDropdown = ref(false);
</script>
<template>
<div class="wrapper">
    <!-- Navbar -->
     <Nav>
     </Nav>
   
    <!-- /.navbar -->
  
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="" class="brand-link">
        <img :src="logo" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        
        <span class="brand-text font-weight-light">Asturias</span>
      </a>
  
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img :src="user" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>
  
      
  
        <!-- Sidebar Menu -->
        <Sidebar></Sidebar>
      </div>
      <!-- /.sidebar -->
  
      <div class="sidebar-custom">
        <a href="#" class="btn btn-link"><i class="fas fa-cogs"></i></a>
        <a href="#" class="btn btn-secondary hide-on-collapse pos-right">Help</a>
      </div>
      <!-- /.sidebar-custom -->
    </aside>
  
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <ContentHeader titulo="Contenedor para titulo"></ContentHeader>
  
      <!-- Main content -->
      <section class="content">
  
        <div class="container-fluid">
          <slot />
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  
    <Footer mensaje="Version" version=3.0.4  link="https://adminlte.io">
    </Footer>
  
    <!-- Control Sidebar -->
    <Aside></Aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</template>
