<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo menu" :collapse="isActive" background-color="#545c64" text-color="#fff" acitve-background-color="#001528" active-text-color="#ffd04b" router>
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

<style lang="scss">
  .menu {
    height: 100%;
    overflow: auto;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
  }
</style>
