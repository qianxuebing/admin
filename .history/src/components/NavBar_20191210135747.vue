<template>
  <div class="header-inner">
    <i class="active-btn" :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar" size='lage'></i>
    <el-dropdown>
      <span class="el-dropdown-link">
        hello, {{ loginForm.name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isActive', 'loginForm'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style>
  .header-inner{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .active-btn{
    font-size: 25px;
  }
</style>
