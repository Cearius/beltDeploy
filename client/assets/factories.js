app.factory('startFactory', ['$http', '$location', function($http, $location){
  var factory = {};
  factory.addUser = function(user, callback){
    $http({
      method: "POST",
      url: "/users",
      data: user
    }).then(function(returned){
      console.log('factory received response:',returned.data)
      callback(returned.data);
    })
  }
  factory.login = function(user, callback){
    $http({
      method: "POST",
      url: "/login",
      data: user
    }).then(function(returned){
      console.log('factory received response:',returned.data)
      callback(returned.data);
    })
  }
  factory.getCurrentUser = function(callback){
    $http({
      method:'get',
      url:'/currentUser'
    }).then(function(returned){
      callback(returned.data);
    })
  }
  return factory;
}])
