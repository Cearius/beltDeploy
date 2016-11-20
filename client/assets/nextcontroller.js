
//nextController
app.controller('nextController', function($scope, startFactory, $location){
  startFactory.getCurrentUser(function(user){
    $scope.currentUser = user
  })
  $scope.logout = function(){
  }///what the hell is with this function??
})



///does splitting the controls affect anything???
