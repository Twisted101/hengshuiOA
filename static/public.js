//数组去重
Array.prototype.distinct = function() {
  var a = {},
    c = [],
    l = this.length
  for (var i = 0; i < l; i++) {
    var b = this[i]
    var d = typeof b + b
    if (a[d] === undefined) {
      c.push(b)
      a[d] = 1
    }
  }
  return c
}
//设置cookie
window.setCookie = function(name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString())
}
//获取cookie
window.getCookie = function(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if ((arr = document.cookie.match(reg))) return unescape(arr[2])
  else return null
}
//删除cookie
window.delCookie = function(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}
