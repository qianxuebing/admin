<template>
  <div class="home">
    <el-image
      style="width: 30px; height: 30px"
      :src="imgUrl"
      fit>
    </el-image>
    <h1>Welcome to My Project Demo!</h1>
  </div>
</template>

<script>
import aa from '@/assets/aa.jpg'
export default {
  data () {
    return {
      imgUrl: aa
    }
  }
}
</script>

<style>
  .home{
    text-align: center;
  }
  .home > h1{
    font-size: 40px;
    margin-top: 50px;
    background-image:-webkit-linear-gradient(bottom,red,#fd8403,yellow);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    text-shadow: 3px 4px 5px rgba(132, 132, 247, 0.5);
  }
</style>
