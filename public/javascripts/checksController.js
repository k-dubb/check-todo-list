// Controller for the to-do list form
(function() {
  
    var app = angular.module('Check', []);

    app.controller('ChecksController', function ($scope) {

    // var toDoApp = angular.module('toDoApp', ['ngAnimate']);

    $scope.toDos = [
      {'item': 'Wash the car',
       'category': 'one thing',
      {'item': 'Try out Angular.js on CodePen', 
      'category' : 'two things'}
    ];

    $scope.addToDo = function(){
      var formattedDate = Date.parse($scope.formDueDate);
      $scope.toDos.push({description:$scope.formToDo, dueBy:formattedDate});
      $scope.formToDo = '';
      $scope.formDueDate = '';
    };

    $scope.removeToDo = function(toDo){
      var index = $scope.toDos.indexOf(toDo);
      $scope.toDos.splice(index, 1);     
    };

    });



    // $scope.todos = [ {text:'One Thing', text: 'third thing', text: 'another', done:false} ];

    // $scope.getTotalTodos = function () {
    //   return $scope.todos.length;
    // };
  
    // $scope.addToDo = function () {
    //   $scope.todos.push({text:$scope.formData.name, text:$scope.formData.item, text:$scope.formData.category, done:false});

    //   $scope.formData.name = '';
    //   $scope.formData.item = '';
    // };

  
    // $scope.clearCompleted = function () {
    //     $scope.todos = _.filter($scope.todos, function(todo){
    //         return !todo.done;
    //     });
    // };




      // $scope.strikethrough = function(){
      //   ang
      // }


//     $scope.checkedBox = true;

//     function checkoff($checked) {

//       $scope.checkedBox = $checked;
  
//     }

// $scope.checkoff = checkoff;



        // this.formData = { topic: '', term: '', definition: '' };
        // this.currentCard = { term: '', definition: '' };
        // this.newTopic = { topic: ''};
        // this.index = 0;

        // var self = this;

        // $http({
        //   method: 'GET',
        //   url: '/api/study'
        // }).then(function successCallback(response) {
        //   console.log('success', response.data);
        // });

          // self.stacks = response.data;

          // console.log(response.data);

          // self.currentCard = {
            // term: response.data[self.index]['cards'][0].term,
            // definition: response.data[self.index]['cards'][0].definition
          // };
    //       console.log('got here');

    //       return self;

    //     }, function errorCallback(response) {

    });


})();