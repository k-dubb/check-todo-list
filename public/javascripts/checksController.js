// Controller for the to-do list form
(function() {
  
    var app = angular.module('Check');

    app.controller('ChecksController', function ($scope) {

        // $scope.user   = $routeParams.orderId;


    // var self = this;

    // function checkCtrl($scope) {

      // $scope.items = [];

      $scope.filters = {};

      $scope.todos = [];


      // var todos = [
      //   {
      //     "name": "Kelli's", 
      //     "items": [
      //       { itemName: "Test" },
      //       { itemName: "Test2" }
      //     ]
      //   }
      //   ]; 
        //   {
        //   "id": 1, 
        //   "name": "Pete's", 
        //   "items": "Test2"
        // }
        

      // $scope.todos = todos;

      // $scope.todos = [
      //   {
      //     "id": 0, 
      //     "name": "Kelli's", 
      //     "items": 
      //     [
      //         {
      //           "itemName": ["Learn AngularJS", "Learn React"]
                // done:false
              // }
              // {
                // "itemName": "Learn React"
                // done:true
              // }
      //     ]
      //   }
      // ];
               // {
        //   "id": 1, 
        //   "name": "Pete's", 
        //   "item": 
        //   [
        //         "Learn Something else", 
        //         "Learn A 4th thing"
        //   ]
        // }
      

      // var itemsLeft = $scope.todos.length;

      
      // $scope.getTotalTodos = function () {

      //   $scope.todos = _.filter($scope.todos, function(todo){
      //           return !todo.done;
      //       });

      //     var leftToDo = !todo.done;
      //     var lengthOfArray = $scope.todos.length;
      //     var totalTodos = lengthOfArray - leftToDo;

      //     return totalTodos;
      // };

      // $scope.getTotalTodos = getTotalTodos;

      $scope.addTodo = function () {
          // $scope.todos.push({text:$scope.todo.name, text:$scope.todo.item, done:false});

          $scope.todos.push({ 
            name: $scope.todoName,
            item: $scope.todoItemName
            // color: $scope.todoColor
            // items: [ { item: $scope.todoItemName }]
           });

          // $scope.todoName = "";
          $scope.todoItemName = "";

          console.log('adding an item!');

          // $scope.formTodoText = '';
      };



      // $scope.showLists = function() {
      //       return $scope.todoName;
            // console.log(todoName);

         // $location.path(user);

      // }
      
      // $scope.showLists = showLists;

      $scope.clearCompleted = function () {
            $scope.todos = _.filter($scope.todos, function(todo){
                return !todo.done;
            });
      };


      // Show newly create list on user's page //
      // $scope.showCreatedLists = function () {
      //     return $scope.todo.name;

      // };

      // $scope.itemsDone = function () {

      //     var itemsLeft = $scope.todos.length - 1;

      //     console.log(itemsLeft);
 
      // };


      $scope.currentList = null;

        function setCurrentList(todo){
            $scope.currentList = todo;
        }

        function isCurrentList(todo){
            return $scope.currentList !== null && todo.name === $scope.currentList.name;
        }

        $scope.setCurrentList = setCurrentList;
        $scope.isCurrentList = isCurrentList;


    });
})();




    // app.controller('ChecksController', function ($scope) {

    // $scope.toDos = [
    //   {'name': 'testName', 
    //   'item': 'Wash the car',
    //    'category': 'one thing'},
    //   {'name': 'TestName2',
    //   'item': 'Try out Angular.js on CodePen', 
    //   'category': 'two things'}
    // ];

    // function addToDo(toDo){

    //   $scope.toDos.push({ name:$scope.formToDoName, item:formToDoItem, category: formToDoCategory });

    //   $scope.formToDoName = '';
    //   $scope.formToDoItem = '';
    //   $scope.formToDoCategory = '';

    // };

    // $scope.addToDo = addToDo;

    // $scope.removeToDo = function(toDo){
    //   var index = $scope.toDos.indexOf(toDo);
    //   $scope.toDos.splice(index, 1);     
    // };

    // });









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

    // });


// })();