angular.module('service')
  .service('util', [
    function() {
    
      // 对象转formData：{a:11,b:22} => a=11&b=22
      this.toFormDate = function(data) {
        var result = '';
        for(var key in data) {
          result += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
        }
        return result.slice(0, -1);
      };
    
    }
  ]);