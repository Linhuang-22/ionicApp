// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// 注意要在这里注入自己写的服务和控制器
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// 注意这里每一个函数调用完后都会返回angular.module对象以做链式调用，所以不要在语句的最后加上分号！
// $stateProvider,注入状态
// $urlRouterProvider，注入url理由服务
// $ionicConfigProvider，注入ionic的基础配置
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  // 解决demo在安卓下ion-nav-bar在上面的问题
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');

  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  // 返回按钮的iocn样式设置，默认没有文字
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

  // 对视图切换动画的设置
  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // ionic使用angularUI路由来控制页面状态
  // 更多资料请关注：https://github.com/angular-ui/ui-router

  // 使用注入的$stateProvider服务
  $stateProvider
  // setup an abstract state for the tabs directive
  // 为tab指令设置抽象模板

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // 为每个tab设置对象的导航历史状态
  // Each tab has its own nav history stack:

  // 分类tab
  .state('tab.classify', {  // 状态名写为tab.***表示改状态是tab的子页面,而且页面的url前也会有tab
    url: '/classify',
    views: {
      'tab-classify': {  // 对应后面tab子元素ion-nav-view的name
        templateUrl: 'templates/tab-classify.html',
        controller: 'classifyCtrl'
      }
    }
  })

  // 主播/客人tab（搜索列表页）  //这里可能还需要传入搜索的条件语句
  .state('tab.result-list', {
    url: '/resultList',
    views: {
      'tab-result-list': {
        templateUrl: 'templates/result-list.html',
        controller: 'resultListCtrl'
      }
    }
  })

  // 搜索tab（暂时把它独立出来）
  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'searchCtrl'
      }
    }
  })

  // 用户设置tab  
  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-setting': {
        templateUrl: 'templates/tab-setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  //如果地址不是以上地址的话就跳转到该地址
  $urlRouterProvider.otherwise('/tab/classify');


})