var DEFAULT_AVATAR = '/public/img/default.png'; // 默认头像
var STORAGE_KEY = 'userinfo';                                  // localStorage的键

/**
 * 获取用户信息：
 * 1、获取本地存储的用户信息
 * 2、解析为js对象方便使用
 * 3、判断是否存在头像src，不存在设置为默认头像src
 * 4、返回用户信息
 * */
function get() {
  var userinfoStr = localStorage.getItem(STORAGE_KEY);
  try {
    var result = JSON.parse(userinfoStr) || {};
  }catch(e) {
    var result = {};
  }
  result.tc_avatar = result.tc_avatar || DEFAULT_AVATAR;
  return result;
}

/**
 * 存储用户信息：
 * 1、获取本地存储的用户信息，解析为js对象方便使用
 * 2、判断是否存在头像src，不存在设置为默认头像src
 * */
function set(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

module.exports.get = get;
module.exports.set = set;
