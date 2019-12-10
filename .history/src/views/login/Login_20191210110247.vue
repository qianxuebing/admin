<template>
  <div>
    <div>
      <el-image></el-image>
      <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    var validatePass = ((rule, value, callback) => {
      if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback()
        }
    })
    return {
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          {required: true, validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  computed: {
    ...mapState(['loginForm'])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (loginForm.name !== 'admin' && loginForm.pass !== 'admin123') {
            this.$message({
              message: '账号或密码错误'
            })
            return false
          } else {
            this.$router.push({path: '/layout'})
          }
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style>

</style>
