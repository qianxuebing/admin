<template>
  <el-row>
      <el-col :span="2">
          <i :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar"></i>
      </el-col>
      <el-col :span="22">
          <span>hello, Administrator</span>
      </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isActive'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style>

</style>
