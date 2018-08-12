<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{adminInfo.username}}</div>
    <!-- <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import lib from '@/assets/js/lib.js'
const { gets } = lib
export default {
  // name: 'dashboard',
  // computed: {
  //   ...mapGetters([
  //     'name',
  //     'roles'
  //   ])
  // }
  data() {
    return {
      adminInfo: ''
    }
  },
  mounted() {
    this.adminInfo = gets('adminInfo')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
