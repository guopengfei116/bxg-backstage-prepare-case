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
        // 添加讲师
        .when('/teacher/add', {
            template: '<ngl-tc-add/>'
        })
        // 编辑讲师
        .when('/teacher/edit', {
            template: '<ngl-tc-edit/>'
        })
        // 讲师列表
        .when('/teacher/list', {
            template: '<ngl-tc-list/>'
        })
        // 添加学科
        .when('/category/add', {
            template: '<ngl-cg-add/>'
        })
        // 编辑学科
        .when('/category/edit', {
            template: '<ngl-cg-edit/>'
        })
        // 学科列表
        .when('/category/list', {
            template: '<ngl-cg-list/>'
        })
        // 其他
        .otherwise({
            templateUrl: '/src/html/404.html'
        });
    }
  ]);
