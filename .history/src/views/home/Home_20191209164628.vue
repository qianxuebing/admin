<template>
  <div class="home">
    <h1>Welcome to My Project Demo!</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
  .home{
    text-align: center;
  }
  .home > h1{
    margin-top: 100px;
    background-image:-webkit-linear-gradient(bottom,red,#fd8403,yellow); 
    -webkit-background-clip:text; 
    -webkit-text-fill-color:transparent;
  }
</style>
