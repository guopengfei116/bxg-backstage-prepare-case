angular.module('service')
  .service('http', [
    '$http',
    'API',
    'util',
    function($http, API, util) {
      console.log('service-http');

      // 成功处理函数
      function successHandler(resp, fn) {
        var data = resp.data;
        if(data && data.code == 200) {
          fn(data.result || {});
        }else {
          alert('服务器错误');
        }
      }

      // 错误处理函数
      function errorHandler() {
        alert('网络错误');
      }

      // get请求
      this.get = function(url, data, fn) {
        $http({
          url: url,
          method: 'get',
          params: data,
        }).then(
          function(resp) { successHandler(resp, fn); }
          , errorHandler);
      },

      // post请求
      this.post = function(url, data, fn) {
        $http({
          url: url,
          method: 'post',
          data: util.toFormDate(data),
          headers: {
            'Content-Type':  'application/x-www-form-urlencoded'
          }
        }).then(
          function(resp) { successHandler(resp, fn); }
          , errorHandler);
      },

      // 请求api的快捷方法
      this.api = function(key, data, fn) {
        var config = API[key];

        // 处理参数为key,fn的情况
        if(typeof data === 'function'){
          fn = data;
          data = null;
        }

        this[config.method](config.url, data, fn);
      }
    }
  ]);