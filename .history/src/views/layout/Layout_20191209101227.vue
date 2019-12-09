<template>
  <el-container>
      <el-aside>
          <side-bar></side-bar>
      </el-aside>
      <el-container>
          <el-header>header</el-header>
          <el-main>main</el-main>
      </el-container>
  </el-container>
</template>

<script>
import SideBar from '../../components/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>

<style>

</style>
