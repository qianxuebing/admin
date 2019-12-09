<template>
  <el-menu :default-active="$route.path" width="200px" class="el-menu-vertical-demo menu" :collapse="isActive" background-color="#545c64" text-color="#fff" acitve-background-color="#001528" active-text-color="#ffd04b" :router="true">
    <template v-for="item in sideBarData">
      <el-menu-item :index="item.path" :key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import sideBarData from './mock.js'
export default {
  data () {
    return {
      sideBarData: sideBarData
    }
  },
  computed: {
    ...mapState(['isActive'])
  }
}
</script>

<style>
  .menu {
    height: 100%;
    overflow: auto;
  }
</style>
