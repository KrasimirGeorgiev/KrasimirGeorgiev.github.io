
(function(){
    
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
    
    ListController.$inject = ['quizMetrics', 'DataService'];

    
    function ListController(quizMetrics, DataService){
        var vm = this;

        
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.turtlesData; // Controller reference to the turtle info created in the factory
        vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
        vm.changeActiveTurtle = changeActiveTurtle; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActiveTurtle(index){
           
            vm.activeTurtle = index;
        }

        function activateQuiz(){
            
            quizMetrics.changeState("quiz", true);
        }
    }


})();
