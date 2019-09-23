<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- 表格 -->
    <el-table :data="list">
        <el-table-column width="600px"  label="标题" prop="title"></el-table-column>
                            <!-- 绑定回调函数 -->
        <el-table-column :formatter="formatter" align="center" label="评论状态" prop="comment_status"></el-table-column>
        <el-table-column align="center" label="总评论数" prop="total_comment_count" ></el-table-column>
        <el-table-column align="center" label="粉丝评论数" prop="fans_comment_count" ></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="obj">
            <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text" @click="openORcolse(obj.row)">{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
          </template>
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [{}]
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
      })
    },
    formatter (row, column, cellvale, index) {
      return cellvale ? '正常' : '关闭'
    },
    openORcolse (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定${mess}评论?`, '温馨提示').then(() => {
        this.$axios({
          url: 'comments/status',
          method: 'put',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(() => {
          this.getComment()
        })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
