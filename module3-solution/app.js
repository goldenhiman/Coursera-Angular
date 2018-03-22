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

    ndc.found = [];
    ndc.searchTerm = '';
    ndc.getMatchedMenuItems = function(searchTerm){
        MenuSearchService.getMatchedMenuItems(searchTerm,function(data){
            ndc.found = data;
        });
    };

    ndc.removeItem = function(index){
        ndc.found.splice(index,1);
    };
}


//directives

function foundItems(){
    var ddo = {
        templateUrl: "foundItems.html"  
    };

    return ddo;
}


//services

MenuSearchService.$inject = ['$http', 'AppBaseAddr']
function MenuSearchService($http, AppBaseAddr){
    var nds = this;

    nds.getMatchedMenuItems = function(searchTerm, cbfunc){
        return $http({
            method: 'GET',
            url: ( AppBaseAddr + "/menu_items.json" ),
        }).then(function(result){
            var foundItems = [];
            var searchArr = searchTerm.split(/,| /);
            for(var i=0; i< result.data.menu_items.length; i++){
                var tempArr = result.data.menu_items[i].description.split(/,| /);
                var count = 0;
                for(var j=0; j<searchArr.length; j++){
                    for(var k=0; k<tempArr.length; k++){
                        if(searchArr[j] == tempArr[k]){
                            count++;
                            break;
                        }
                    }
                }
                if(count==searchArr.length){
                    foundItems.push(result.data.menu_items[i]);
                }
            }
            cbfunc(foundItems);
        });
    }
}


})();