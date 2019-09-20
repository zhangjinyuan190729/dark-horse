<template>
  <div class="login">
    <el-card class="box-card">
      <div class="titel"><img src="../../assets/img/logo_index.png" alt=""></div>
      <!-- 表单验证 -->
     <el-form style="margin-top:15px" ref="myfrom" :model="loginForm" :rules="loginRules">
       <el-form-item prop="mobile">
         <!-- 电话号码 -->
         <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
       </el-form-item>
       <el-form-item prop="code">
         <!-- 验证码 -->
         <el-input v-model="loginForm.code" style="width:65%" placeholder="请输入验证码"></el-input> <el-button style="float:right">发送验证码</el-button>
       </el-form-item>
       <el-form-item prop="checked">
         <el-checkbox v-model="loginForm.checked"><span style="color:#606266">我已阅读并同意<a href="" style="color:#409EFF">用户协议</a>和<a href="" style="color:#409EFF">隐私条款</a></span></el-checkbox>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" style="width:100%" @click="submit">登录</el-button>
       </el-form-item>
     </el-form>
</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: ''
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入手机号' }],
        code: [{ required: true, message: '请输入验证码' }]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.myfrom.validate((valid) => {
        if (valid) {
          console.log('ok')
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
.login{
height: 100vh;
background-image: url(../../assets/img/login_bg.jpg);
background-size: cover;
position: relative;
}
.box-card {
    height:330PX ;
    width: 450px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left:50%;
    .titel{
      text-align: center;
      img{
        width: 200px;
        height: 40px;

      }
    }
  }
</style>
