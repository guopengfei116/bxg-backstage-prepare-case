angular.module('service')
  .service('storage', [function() {

    // 存储数据到本地
    this.set = function(key, data) {
      try {
        data = JSON.stringify(data);
      }finally {
        localStorage.setItem(key, data);
      }
    },

    // 读取本地数据，没有时返回null
    this.get = function(key) {
      let strData = localStorage.getItem(key);
      try {
        return JSON.parse(strData);
      }catch(e) {
        return strData; // 解析错误就原物返回
      }
    }
  }]);