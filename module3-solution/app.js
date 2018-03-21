(function(){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems', foundItems)
.constant('AppBaseAddr',"https://davids-restaurant.herokuapp.com");

//controllers

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var ndc = this;

    ndc.searchTerm = '';
    ndc.getMatchedMenuItems = function(searchTerm){
        ndc.found = MenuSearchService.getMatchedMenuItems(searchTerm)
    };

    console.log(ndc.found);




}


//directives

function foundItems(arr){
    var ddo = {
        templateUrl: "foundItems.html",
        
    };

    return ddo;
}


//services

MenuSearchService.$inject = ['$http', 'AppBaseAddr']
function MenuSearchService($http, AppBaseAddr){
    var nds = this;

    nds.getMatchedMenuItems = function(searchTerm){
        return $http({
            method: 'GET',
            url: ( AppBaseAddr + "/menu_items.json" ),
            params: {
                category: searchTerm
            }
        }).then(function(result){
            return result.data;
        });
    }
}


})();