<template>
  <el-container class="container">
      <side-bar></side-bar>
      <el-container>
          <el-header>
            <nav-bar></nav-bar>
          </el-header>
          <el-main>
            <app-main></app-main>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'
import AppMain from '../../components/AppMain'
export default {
  data () {
    return {
      currentView: 'AppMain'
    }
  }
  components: {
    SideBar,
    NavBar,
    AppMain
  }
}
</script>

<style>
  .container {
    height: 100%;
  }
</style>
