angular.module('config')
  .config([
    '$routeProvider',
    function($routeProvider) {
        console.log('路由配置');
        $routeProvider
        // 首页
        .when('/', {
            template: '<ngl-index/>'
        })
        .when('/index', {
            redirectTo: '/'
        })
        // 登陆
        .when('/login', {
            template: '<ngl-login/>'
        })
        // 个人中心
        .when('/profile', {
            template: '<ngl-profile/>'
        })
        // 修改密码
        .when('/repass', {
            template: '<ngl-repass/>'
        })
        // 其他
        .otherwise({
            templateUrl: '/src/html/404.html'
        });
    }
  ]);
