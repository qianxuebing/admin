<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isActive" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item>
      <i class="el-icon-location"></i>
      <span slot="title">导航-</span>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
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
