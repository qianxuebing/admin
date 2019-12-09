<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isActive">
    <el-menu-item>菜单一</el-menu-item>
    <el-menu-item>菜单二</el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isActive'])
  }
}
</script>

<style>

</style>
