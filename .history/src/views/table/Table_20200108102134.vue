<template>
  <div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="姓名">
         <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话">
         <el-input v-model="formInline.telephone" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSearch">查询</el-button>
        <el-button type="primary" @click="onAdd">新增</el-button>
        <el-upload
          class="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button>点击上传</el-button>
          <div slot="tip" class="el-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        prop="date"
        label="日期"
        width="130">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="operation"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.$index,scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.$index,scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="editForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="editForm.tel" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="地址">
          <el-input v-model="editForm.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tableData from './tableData.js'
export default {
  data () {
    return {
      tableData: tableData,
      title: '',
      fileList: [],
      dialogFormVisible: false,
      editIndex: 0,
      formInline: {
        name: '',
        telephone: ''
      },
      editForm: {
        name: '',
        tel: '',
        address: ''
      }
    }
  },
  computed: {
    formatDate () {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let day = now.getDate()
      month = month >= 10 ? month : '0' + month
      day = day >= 10 ? day : '0' + day
      return `${year}-${month}-${day}`
    }
  },
  methods: {
    onSearch () {
      if (this.formInline.name === '' && this.formInline.telephone === '') {
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
    },
    onAdd () {
      this.title = '新增'
      this.dialogFormVisible = true
      this.editForm = {}
    },
    handleEdit (index, row) {
      this.editIndex = index
      this.title = '编辑'
      this.dialogFormVisible = true
      this.editForm = Object.assign({}, row)
    },
    handleDelete (index, row) {
      this.$confirm(`确定要删除"${row.name}"的相关信息吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handlePreview (file) {
      console.log('handlePreview000000', file)
    },
    handleRemove (file, fileList) {
      console.log('handleRemove11111111111', file)
      console.log('handleRemove11111111111', fileList)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除${file.name}?`)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择1个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
    },
    onSave () {
      this.dialogFormVisible = false
      if (this.title === '新增') {
        this.tableData.push({
          date: this.formatDate,
          name: this.editForm.name,
          tel: this.editForm.tel,
          address: this.editForm.address
        })
      } else {
        this.tableData.splice(this.editIndex, 1, this.editForm)
      }
    }
  }
}
</script>

<style>
  .upload {
    display: inline-block;
    margin-left: 10px;
  }
</style>
