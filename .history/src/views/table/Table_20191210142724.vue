<template>
  <div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="姓名">
         <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
         <el-input v-model="formInline.telephone" placeholder="请输入联系方式"></el-input>
      </el-form-item>
    </el-form>
    <el-table>

    </el-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
