//  app.controller('messageController', ['$scope','startFactory','nextFactory', '$location', function messageController($scope, startFactory, nextFactory, $location){
// $scope.message = {};

//   function getMess(){
//      nextFactory.getMess(function(data){
//        console.log('Regularstuff', data);
//        $scope.messages = data;
//      })
//    }; getMess();

//   //  function getMess(){
//   //    userFactory.getMess(function(data){
//   //      _this.messages=data;
//   //    })
//   //  }
//   //  getMess();

//    $scope.addMess = function(){
//      console.log('dolphin');
//      console.log($scope.message);
//      nextFactory.addMess($scope.message, function(data){
//        console.log(data);
//         //  $location.path('/')
//         getMess();
//      })
//    };

//   //  this.addMess = function(){
//   //    userFactory.addMess(this.message, function(data) {
//   //      if(data.hasOwnProperty('errors')){
//   //        _this.messageErrors = data.errors;
//   //        console.log(data.errors);
//   //      } else {
//   //          getMess();
//   //        }
//   //    })
//   //  };


//    $scope.addComm = function(message, messageId){
//      console.log(message.comment);
//      nextFactory.addComm(message.comment, messageId, function(data){
//       //  console.log(message);
//         //  $location.path('/')
//         getMess();
//      })
//    };

//   //  this.addComm = function(messageId){
//   //    userFactory.addComm(this.comment[messageId], messageId, function(data){
//   //      if(data.hasOwnProperty('errors')){
//   //        _this.commentErrors = data.errors;
//   //        console.log(data.errors);
//   //      } else {
//   //          getMess();
//   //      }
//   //    })
//   //  }

//   startFactory.getCurrentUser(function(user){
//     $scope.currentUser = user
//   })
// }]);
