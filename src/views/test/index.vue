<template>
  <div>
  	<el-checkbox-group v-model="checkList">
    <el-checkbox :label="item.id" :key="item.id" v-for="item in colorList">{{item.name}}</el-checkbox>
  </el-checkbox-group>
  <el-checkbox-group v-model="checkList">
    <el-checkbox :label="item.id" :key="item.id" v-model="item.id" v-for="item in qualityList">{{item.name}}</el-checkbox>
  </el-checkbox-group>
  </div>
</template>

<script src="./test.js">

</script>

<style>

</style>
