import $ from 'jquery'
import ajax from './ajax.js'
import api from './api.js'
import share from './share.js'

let language = window.localStorage.getItem('LANG') || 'cn'

const lib = {
  $,                                                  // jQuery
  ajax: ajax.ajax,                                    // 接口
  api,                                                // API接口
  calc: share.calc,
  dateTime: share.dateTime,
  changePage: share.changePage,
  changePageSize: share.changePageSize,
  getData: share.getData,
  $l: language, // 当前语言
  clearLoading: share.clearLoading,
  gets: share.gets,
  sets: share.sets,
  getOldPager: share.getOldPager,
  setOldPager: share.setOldPager,
  remove: share.remove,
  formatDate: share.formatDate,
  dateFormat: share.dateFormat
}

export default lib
