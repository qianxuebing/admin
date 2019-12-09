<template>
  <div class="header">
    <i :class="`${isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'}`" @click="toggleSideBar"></i>
    <span>hello, Administrator</span>
  </div>
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
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
