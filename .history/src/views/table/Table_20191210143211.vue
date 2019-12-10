<template>
  <div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="姓名">
         <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
         <el-input v-model="formInline.telephone" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table>

    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline : {
        name: '',
        telephone: ''
      }
    }
  },
  methods: {
    onSearch () {
      if (this.formInline.name === undefined && this.formInline.telephone === undefined) {
        this.$message({
          message: '请输入查询条件',
          type: 'error'
        })
        return false
      } else {
        this.$message({
          message: '查询成功',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style>

</style>
