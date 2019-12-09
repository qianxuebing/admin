<template>
  <el-container class="container">
      <el-aside>
          <side-bar></side-bar>
      </el-aside>
      <el-container>
          <el-header>
            <nav-bar></nav-bar>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'
export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style>
  .container {
    height: 100%;
  }
</style>

