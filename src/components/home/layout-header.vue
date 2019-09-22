<template>
  <el-row type="flex" justify="space-between" align="middle">
      <!-- 左侧内容 -->
      <el-col :span="6">
          <i class="el-icon-s-unfold" style="font-size:22px; "></i>
          <span style="vertical-align:top;margin-left:4px">江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧内容 -->
        <el-col :span="4">
            <img src="../../assets/img/avatar.jpg" alt="" style="vertical-align:middle;width:40px;height:40px;border-radius:50%; margin-right:5px;">
            <!-- 下拉菜单 -->
<el-dropdown trigger="click">
      <span class="el-dropdown-link">
        逆袭<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >个人信息</el-dropdown-item>
        <el-dropdown-item >git地址</el-dropdown-item>
        <el-dropdown-item >退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>
div{
  border-radius:
}
</style>
