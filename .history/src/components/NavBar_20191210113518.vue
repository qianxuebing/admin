<template>
  <div class="header-inner">
    <i class="active-btn" :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar" size='lage'></i>
    <span>hello, {{ loginForm.name }}</span>
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
