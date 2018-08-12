import lib from '@/assets/js/lib.js'
const { ajax, api } = lib
export default {
  data() {
    return {
      checkList: ['1', '白色', '10g', '50g'],
      colorList: [{
        id:'1',
        name: '白色'
      }, {
        id:'2',
        name: '黑色'
      }, {
        id:'3',
        name: '黄色'
      }, {
        id:'4',
        name: '紫色'
      }, {
        id:'5',
        name: '绿色'
      }],
      qualityList: [{
        id:'1',
        name: '5g'
      }, {
        id:'2',
        name: '10g'
      }, {
        id:'3',
        name: '20g'
      }, {
        id:'4',
        name: '30g'
      }, {
        id:'5',
        name: '50g'
      }]
    }
  },

  mounted() {
    // this.getTypeList()
  },

  methods: {
    // 获取类型信息
    getTypeList() {
      const callback = (data) => {
        this.goodsType = data.list
      }
      ajax(api.goodsTypeList, 'POST', {}, callback)
    }
  }
}
