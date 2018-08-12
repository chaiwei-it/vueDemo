import ajax from './ajax.js'
import $ from 'jquery'
const app = {
  calc (result, par, disabled) {
    /**
     * 计算成树形结构DATA
     * */
    let arr = []
    for (let i in result) {
      if (result[i].parentId === par) {
        let opt = {
          expand: false,
          title: result[i].text,
          id: result[i].id,
          value: result[i].id,
          state: result[i].state,
          parentId: result[i].parentId,
          text: result[i].text,
          label: result[i].text,
          icon: result[i].icon,
          disabled: disabled || false
          // checked: result[i].state.selected || false
        }
        if (app.childrenCalc(opt.id, result)) {
          opt.children = app.calc(result, opt.id, disabled)
        } else {
          opt.checked = result[i].state ? result[i].state.selected : false
        }
        if (result[i].state) {
          opt.state.selected = true
        }
        arr.push(opt)
      }
    }
    return arr
  },
  childrenCalc (id, res) {
    /**
     * 计算子数据是否包含
     * */
    for (let i in res) {
      if (res[i].parentId === id) return true
    }
    return false
  },
  dateTime (time) {
    /**
     * 获取时间戳转换成指定格式的时间
     * */
    let date = new Date(time)
    return app.formatDate(date, 'yyyy-MM-dd hh:mm:ss')
  },
  formatDate (date, fmt) {
    /**
     * 转换时间
     * */
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : app.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero (str) {
    return ('00' + str).substr(str.length)
  },
  changePage (i) {
    /**
     * 分页通用方法
     * */
    this.getData(parseInt(i))
  },
  changePageSize (i) {
    /**
     * 数据显示数量通用方法
     * */
    this.parameter.pageSize = i
    this.getData()
  },
  getData (i) {
    /**
     * 获取列表数据通用方法
     * */
    if (isNaN(i)) this.parameter.pageIndex = 1
    else this.parameter.pageIndex = i
    let callback = (data) => {
      this.total = data.total
      this.data = data.data
    }
    if (this.api) ajax.ajax(this.api, this.method ? this.method : 'POST', this.parameter, this.callback || callback)
  },
  clearLoading () {
    setTimeout(function () {
      $('.ivu-btn-loading i').remove()
      $('.ivu-btn-loading').removeClass('ivu-btn-loading')
    }, 500)
  },
  gets (name) {
    // 本地存储-获取
    let value = window.sessionStorage.getItem(name)
    if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
    return value
  },
  sets (name, value) {
    // 本地存储-设置
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return window.sessionStorage.setItem(name, value)
  },
  getOldPager () {
    // 本地存储-获取
    let value = window.sessionStorage.getItem('pager')
    if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) {
      value = JSON.parse(value)
      window.sessionStorage.removeItem('pager')
    }
    return value
  },
  setOldPager (pager) {
    // 本地存储-设置
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return window.sessionStorage.setItem('pager', JSON.stringify(pager))
  },
  remove (name) {
    // 本地存储-删除
    return window.sessionStorage.removeItem(name)
  },
  dateFormat(row, column) {
    var date = new Date(row[column.property])
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '
    var h = date.getHours() + ':'
    var m = date.getMinutes() + ':'
    var s = date.getSeconds()
    return Y + M + D + h + m + s
  },
}
export default app
