 app.controller('messageController', ['$scope','nextFactory', '$location', 'messageController',  function messageController($scope, nextFactory, $location){

  function getMess(){
     nextFactory.getMess(function(data){
       $scope.message = data;
     })
   }; getMess();

  //  function getMess(){
  //    userFactory.getMess(function(data){
  //      _this.messages=data;
  //    })
  //  }
  //  getMess();

   $scope.addMess = function(){
     nextFactory.addMess($scope.message, function(data){
       console.log(message);
        //  $location.path('/')
     })
   }; getMess();

  //  this.addMess = function(){
  //    userFactory.addMess(this.message, function(data) {
  //      if(data.hasOwnProperty('errors')){
  //        _this.messageErrors = data.errors;
  //        console.log(data.errors);
  //      } else {
  //          getMess();
  //        }
  //    })
  //  };


   $scope.addComm = function(messageId){
     nextFactory.addComm($scope.message[messageId],messageId, function(data){
       console.log(message);
        //  $location.path('/')
     })
   }; getMess();

  //  this.addComm = function(messageId){
  //    userFactory.addComm(this.comment[messageId], messageId, function(data){
  //      if(data.hasOwnProperty('errors')){
  //        _this.commentErrors = data.errors;
  //        console.log(data.errors);
  //      } else {
  //          getMess();
  //      }
  //    })
  //  }


}]);
