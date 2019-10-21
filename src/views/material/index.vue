<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
       <el-upload class="upload" :http-request="uploadImg" action="" :show-file-list="false">
      <el-button size="small" type="primary">上传图片</el-button>
    </el-upload>
    <!-- 默认绑定 -->
    <el-tabs v-model="activeName" @tab-click="chagetab" v-location>
      <el-tab-pane label="全部" name="all">
        <div class="img-list">
          <el-card
            class="list-item"
            v-for="item in list"
            :key="item.id"
            :body-style="{padding:'5px'}"
          >
            <img :src="item.url" alt />
            <!-- 收藏 删除 -->
            <div class="down">
              <i class="el-icon-star-on" :style="{color:item.is_collected?'red':'#000'}" @click="Collect(item)"></i>
              <i class="el-icon-delete-solid" @click="delImg(item.id)"></i>
            </div>
          </el-card>
        </div>
        <el-row type="flex" justify="center" style="margin-top:10px">
            <el-pagination @current-change="pageChage" layout="prev, pager, next" :total="page.total_count" :page-size="page.per_page" :current-page="page.page"></el-pagination>
          </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="collect">
        <div class="img-list">
          <el-card
            class="list-item"
            v-for="item in list"
            :key="item.id"
            :body-style="{padding:'5px'}"
          >
            <img :src="item.url" alt />
          </el-card>
        </div>
        <el-row type="flex" justify="center" style="margin-top:10px">
          <el-pagination  @current-change="pageChage" layout="prev, pager, next" :total="page.total_count" :page-size="page.per_page" :current-page="page.page"></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        total_count: 0, // 图片总数
        page: 1, // 当前页数
        per_page: 10 // 每页图片数
      }
    }
  },
  methods: {
    delImg (id) {
      this.$confirm('您确定要删除此图片吗？').then(() => {
        this.$axios({
          url: `/user/images/${id}`,
          method: 'delete'
        }).then(result => {
          this.getMaterial()
        })
      })
    },
    // 收藏
    Collect (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`您确定要${mess}收藏此图片吗？`).then(() => {
        this.$axios({
          url: `/user/images/${item.id}`,
          method: 'put',
          data: { collect: !item.is_collected }
        }).then(result => {
          this.getMaterial()
        })
      })
    },
    // 上传素材
    uploadImg (params) {
      const data = new FormData() // 声明一个新的表单
      data.append('image', params.file)
      // 上传文件
      this.$axios({
        url: '/user/images',
        method: 'post',
        data
      }).then(() => {
        this.getMaterial()
        this.$message({ message: '上传成功', type: 'success' })
      })
    },
    // 分页
    pageChage (newpage) {
      this.page.page = newpage
      this.getMaterial()
    },
    chagetab () {
      this.page.page = 1
      this.getMaterial()
    },
    // 获取图片素材
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect', page: this.page.page, per_page: this.page.per_page }
      }).then(result => {
        this.list = result.data.results
        this.page.total_count = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.upload{
  position: absolute;
right: 50px;
top: 120px;
z-index: 1;
}
.img-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .list-item {
    position: relative;
    border-radius: 5px;
    margin: 30px;
    width: 180px;
    height: 180px;
    img {
      height: 100%;
      width: 100%;
    }
    .down {
      background-color: #f4f5f6;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 30px;
      width: 100%;
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
