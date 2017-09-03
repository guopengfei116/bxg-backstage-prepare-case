angular.module('constant')
  .constant('API', {

  	// 登陆
  	login: {
  		url: '/v6/login',
  		method: 'post'
  	},

  	// 退出
  	logout: {
		url: '/v6/logout',
		method: 'post'
	},
	  
	// 个人管理
	profileGet: {
		url: '/v6/teacher/profile',
		method: 'get'
	},

	profileModify: {
		url: '/v6/teacher/modify',
		method: 'post'
	},

	profileAvatar: {
		url: '/v6/uploader/avatar',
		method: 'post'
	},

	repass: {
		url: '/v6/teacher/repass',
		method: 'post'
	},

  	// 讲师管理
  	teacherList: {
  		url: '/v6/teacher',
  		method: 'get'
  	},

  	teacherAdd: {
  		url: '/v6/teacher/add',
  		method: 'post'
  	},

  	teacherEdit: {
  		url: '/v6/teacher/edit',
  		method: 'get'
	},
	  
  	teacherModify: {
  		url: '/v6/teacher/update',
  		method: 'post'
  	},
	  
	  teacherView: {
  		url: '/v6/teacher/view',
  		method: 'get'
  	},
	  
	  teacherHandle: {
  		url: '/v6/teacher/handle',
  		method: 'post'
  	},

  	// 学科管理
  	categoryList: {
  		url: '/v6/category',
  		method: 'get'
  	},

  	categoryAdd: {
  		url: '/v6/category/add',
  		method: 'post'
  	},

  	categoryEdit: {
  		url: '/v6/category/edit',
  		method: 'get'
  	},

  	categoryModify: {
  		url: '/v6/category/modify',
  		method: 'post'
  	},

  	categoryTop: {
  		url: '/v6/category/top',
  		method: 'get'
  	},

  	categoryChild: {
  		url: '/v6/category/child',
  		method: 'get'
  	},

  	// 课程管理
  	courseList: {
  		url: '/v6/course',
  		method: 'get'
  	},

  	courseAdd: {
  		url: '/v6/course/create',
  		method: 'post'
  	},

  	courseStep1: {
  		url: '/v6/course/basic',
  		method: 'get'
  	},

  	courseStep1Modify: {
  		url: '/v6/course/basic',
  		method: 'get'
  	},

  	courseStep2: {
  		url: '/v6/course/picture',
  		method: 'get'
  	},

  	courseCover: {
  		url: '/v6/uploader/cover',
  		method: 'post'
  	},

  	coursePicture: {
  		url: '/v6/uploader/picture',
  		method: 'post'
  	},

  	// 课时管理
  	courseStep3: {
  		url: '/v6/course/lesson',
  		method: 'get'
  	},

  	chapterAdd: {
  		url: '/v6/course/chapter/add',
  		method: 'post'
  	},

  	chapterEdit: {
  		url: '/v6/course/chapter/edit',
  		method: 'get'
  	},

  	chapterModify: {
  		url: '/v6/course/chapter/modify',
  		method: 'post'
  	}
  });