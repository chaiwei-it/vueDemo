<template>
  <div>
  	<el-table
    :data="tableData"
    border
    style="width: 100%">
	    <el-table-column
	      prop="name"
	      label="商品名称"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="nowPrice"
	      label="价格"
	      width="180">
	    </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
	  </el-table>
  </div>
</template>

<script>
  import lib from '@/assets/js/lib.js'
  const { ajax, api } = lib
  export default {
    data() {
      return {
        pager: {
          name: '',
          classId: '',
          status: '',
          pageIndex: 1,
          pageSize: 10,
          orderBy: 'create_time desc'
        },
        tableData: []
      }
    },

    mounted() {
      this.getPager()
    },

    methods: {
      getPager() {
        const callback = (data) => {
          this.tableData = data.list
        }
        ajax(api.goodsPager, 'POST', this.pager, callback)
      },

      handleEdit(id) {
        console.log(id)
      },
      handleDelete(index, row) {
        console.log(index, row)
      }
    }
  }
</script>

<style>

</style>
