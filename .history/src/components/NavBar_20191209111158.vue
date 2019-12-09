<template>
  <el-row>
      <el-col :span="2">
          <i :class="`${isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'}`" @click="toggleSideBar"></i>
      </el-col>
      <el-col :span="22"></el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['isActive'])
  },
  methods: {
    ...mapActions['toggleSideBar']
  }
}
</script>

<style>

</style>
