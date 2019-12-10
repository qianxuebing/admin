<template>
  <div class="header-inner">
    <i class="active-btn" :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar" size='lage'></i>
    <el-dropdown  @command="handleCommand">
      <span class="el-dropdown-link">
        hello, {{ loginForm.name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="out">退出登录</el-dropdown-item>
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
    },
    handleCommand (command) {
      this.$router.go(-1)
      this.loginForm.name = ''
      this.loginForm.pass = ''
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
  .header-inner .el-dropdown{
    color: #fff;
  }
</style>
