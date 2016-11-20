app.factory('nextFactory', ['$http', '$location', function($http, $location){
  var factory = {};
  factory.getMess = function(callback){
    $http({
      method:'get',
      url:'/message'
    }).then(function(returned){
      callback(returned.data);
    })
  }

  factory.addMess = function(message, callback){
    $http({
      method: "POST",
      url: "/addMessage",
      data: message
    }).then(function(returned){
      console.log('factory received response:',returned.data)
      callback(returned.data);
    })
  }

  factory.addComm = function(comment, messageId, callback){
    $http({
      method: "POST",
      url: "/message/"+messageId+'/comments',
      data: comment
    }).then(function(returned){
      console.log('factory received response:',returned.data)
      callback(returned.data);
    })
  }

  return factory;
}])
