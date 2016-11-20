//startController

app.controller('startController', function($scope, startFactory, $location){

    $scope.addUser = function(user){
      startFactory.addUser(user, function(data){
        console.log(user);
        if(data.hasOwnProperty('errors')){  ///errors for validation messages
          $scope.regErrors = data.errors
        }else{
          $location.path('/')
        }
      })
    };

    $scope.login = function(user){
      console.log(user);
      startFactory.login(user, function(data){
        if(data.hasOwnProperty('errors')){
          $scope.loginErrors = data.errors
        }else{
          $location.path('/')
        }
      })
    };

});//app.controller
