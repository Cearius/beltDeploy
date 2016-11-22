app.factory('loginInterceptor',['$q','$location',function($q, $location){ // angular promise thingy
 return{
    'responseError': function(rejection){
     if (rejection.status == 401)    {  $location.url('/login');   }
     return $q.reject(rejection);
    }
 }
}]); ///interceptors

app.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('loginInterceptor');
  $routeProvider
    .when('/login',{
      templateUrl: 'partials/loginreg.html',
      controller:'startController'
    })
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'messageController'
    })
    .otherwise({
      redirectTo: '/login'
    })
});
