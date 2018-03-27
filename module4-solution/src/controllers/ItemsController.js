angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items){
    var it = this;
    
    it.itms = items;
}