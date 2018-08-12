import $ from 'jquery'
import { Message } from 'element-ui'
import share from './share.js'
import store from '../../store'
const async = true // 异步
const call = () => {
}
const app = {
  ajax: (url, type, data, success, error = call, dataType, _async) => {
    app._start()
    let opt = {
      url: url,
      type,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'x-access-token': share.gets('token')
      },
      data: JSON.stringify(data),
      success: function (data) {
        app._end()
        if (data.code === 20000) {
          success(data)
        } else if (data.code === 42006) {
          share.sets('token', '')
          share.sets('adminInfo', '')
          location.reload()// 为了重新实例化vue-router对象 避免bug
        } else if(data.code === 40001) {
          for (var item in data.details) {
            Message({
              message: data.details[item],
              type: 'error',
              duration: 3 * 1000
            })
          }
        } else {
          Message({
            message: data.msg,
            type: 'error',
            duration: 3 * 1000
          })
          // window._v.prototype.$message.error('错了哦，这是一条错误消息')
          // app._massage_error(data.msg ? data.msg : data.message, 3)
          // error(data, 1)
        }
      },
      error: function (err) {
        app._end()
        let info = JSON.parse(err.responseText)
        app._massage_error(info.message, 5)
        console.log(`%c 阿拉丁 ERROR \n%c ${info.message} > Code: ${info.status} > Time: ${info.timestamp} `, 'color: #fff; background: red; font-size: 20px', 'color: #fff; background: red;')
        error(err, 0)
      },
      dataType,
      async: _async === false ? _async : async
    }
    if (typeof data === 'string') {
      opt.contentType = 'application/json'
    }
    $.ajax(opt)
  },
  _start: () => {
    $('.table, .ivu-tree').addClass('div-loading')
  },
  _end: () => {
    $('.table, .ivu-tree').removeClass('div-loading')
  },
  _massage_error: (info, dur = 3) => {
    window._v.prototype.$Message.error({
      content: info,
      duration: dur
    })
  },
  _massage_info: (info, dur = 3) => {
    window._v.prototype.$Message.info({
      content: info,
      duration: dur
    })
  },
  _push: (path) => {
    setTimeout(function () {
      window.location.href = path
    }, 2000)
  }
}

export default app
