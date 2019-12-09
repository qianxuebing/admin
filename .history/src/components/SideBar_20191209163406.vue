<template>
<div class="side-bar">
  <el-image
    style="width: 50px; height: 50px"
    :src="logo"
    fit>
  </el-image>
  <el-menu router :default-active="$route.path" class="el-menu-vertical-demo menu" :collapse="isActive" background-color="#545c64" text-color="#fff"  acitve-background-color="#001528" active-text-color="#ffd04b">
    <template v-for="item in sideBarData">
      <el-menu-item :index="item.path" :key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</div>
</template>

<script>
import { mapState } from 'vuex'
import sideBarData from './mock.js'
import logo from '../../static/logo.png'
export default {
  data () {
    return {
      sideBarData: sideBarData,
      logo: logo
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
    border: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 160px;
  }
  .side-bar{
    background-color: #545c64;
  }
</style>
