/**
 * 解析location.search，不传参返回解析好的对象，传了返回指定的参数值
 * */
function parseSearch(key) {
  var searchArr = location.search.slice(1).split('&');
  var searchObj = {}, tempArr;

  for(var i = 0, len = searchArr.length; i < len; i++) {
    tempArr = searchArr[i].split('=');
    searchObj[tempArr[0]] = tempArr[1];
  }

  // 如果没有传参，那么返回对象，传了，返回指定的参数值
  return key == null? searchObj: searchObj[key];
}

module.exports.parseSearch = parseSearch;