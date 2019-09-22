<template>
      <!-- 大容器 -->
    <el-container>
<!-- 侧边栏容器 -->
      <el-aside width="200px">
        <!-- 侧边栏模块 -->
        <layout-aside></layout-aside>
      </el-aside>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 二级路由容器 -->
   <router-view> </router-view>
    </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
<style>
</style>
