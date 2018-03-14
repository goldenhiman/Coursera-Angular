(function(){
'use strict';

angular.module('mod1App',[])
.controller('mainctrl',checkfunc);

checkfunc.$inject = ['$scope'];
function checkfunc($scope){
    $scope.food = '';
    $scope.show_res = false;
    $scope.checkiftm = function(){
        $scope.show_res = true;
        var fooditems_temp = $scope.food.split(",");
        var fooditems = [];
        for (var i=0; i<fooditems_temp.length; i++){
            if (fooditems_temp[i] != ''){
                fooditems.push(fooditems_temp[i]); 
            }
        }
        $scope.food_result = '';
        if (fooditems.length == 0){
            $scope.food_result = 'E';
        }
        else if (fooditems.length <= 3 && fooditems.length > 0 ){
            $scope.food_result = "Enjoy!";
        }
        else if(fooditems.length > 3){
            $scope.food_result = 'Too much!';
        } 
    };   
}
}) ();