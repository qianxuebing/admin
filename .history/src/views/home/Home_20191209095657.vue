<template>
  <div>
    <sidebar></sidebar>
    <helloworld></helloworld>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'
import HelloWorld from '../../components/HelloWorld'
export default {
  name: 'Home',
  components: {
    SideBar,
    HelloWorld
  }
}
</script>

<style>

</style>
