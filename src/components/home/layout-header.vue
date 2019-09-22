<template>
  <el-row type="flex" justify="space-between" align="middle">
      <!-- 左侧内容 -->
      <el-col :span="6">
          <i class="el-icon-s-unfold" style="font-size:22px; "></i>
          <span style="vertical-align:top;margin-left:4px">江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧内容 -->
        <el-col :span="4">
            <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="" style="vertical-align:middle;width:40px;height:40px;border-radius:50%; margin-right:5px;">
            <!-- 下拉菜单 -->
<el-dropdown trigger="click" @command="commonClick">
      <span class="el-dropdown-link">
        {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item command="account">个人信息</el-dropdown-item>
        <el-dropdown-item command="git">git地址</el-dropdown-item>
        <el-dropdown-item command="exit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // base64 转换本地图片
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => (
        this.userInfo = result.data
      ))
    },
    commonClick (key) {
      if (key === 'exit') {
        window.localStorage.clear()
        this.$router.push('/login')
      } else if (key === 'git') {
        window.location.href = 'https://github.com/shuiruohanyu/83heimatoutiao.git'
      } else {
        this.$router.push('/home/account')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style>
</style>
