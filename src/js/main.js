angular.module('app', [
  // 第三方模块
  'ngRoute', 

  // 常量
  'constant',

  // provider配置
  'config',

  // 组件
  'component',

  // 服务
  'service'
])

  // angular在DOMContentLoaed事件触发时开始内部初始化，
  // 然后寻找拥有ng-app属性的节点，根据属性值载入相关的模块与依赖模块，
  // 注册模块中的功能，执行模块中的constant、provider、config，
  // 再然后运行run方法，从这里开始，可以正常使用各种内置以及自定义的服务了
  // 最后解析视图执行对应的directive、component、controller，所需的服务按需单例模式创建执行
  .run([
    '$location',
    function($location) {
      console.log('run');
    }
  ]);
