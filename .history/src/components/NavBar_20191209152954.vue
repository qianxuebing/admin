<template>
  <div>
    <i :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar"></i>
    <span>hello, Administrator</span>
  </div>
      <el-col :span="2">
      </el-col>
      <el-col :span="22">
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
