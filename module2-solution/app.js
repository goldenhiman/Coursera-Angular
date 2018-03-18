(function(){
'use strict';

var app = angular.module('ShoppingListCheckOff',[])
.controller('addItemController',addItemController)
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


addItemController.$inject = ['ShoppingListCheckOffService'];
function addItemController(ShoppingListCheckOffService){
    var add = this;
    add.itemName = "";
    add.itemQuantity = "";

    add.addItem = function(){
        ShoppingListCheckOffService.addItem(add.itemName,add.itemQuantity);
    }

}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var tbc = this;

    tbc.isEmpty = false;
    
    tbc.TBitems = ShoppingListCheckOffService.getTBItems();

    tbc.move_to_bought = function(index){
        ShoppingListCheckOffService.moveItem(index);
        if(tbc.TBitems.length == 0){
            tbc.isEmpty = true;
        }else{
            tbc.isEmpty = false;
        }
    }
    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var abc = this;
    abc.ABitems = ShoppingListCheckOffService.getABItems();
}

function ShoppingListCheckOffService(){
    var service = this;
    var ABitems = [];
    var TBitems = [
        {
            name: 'Scrap chicken bones',
            quantity: '10'
        },
        {
            name: 'Heat & Stick Beads',
            quantity: '50'
        },
        {
            name: 'Camo-print bandanas',
            quantity: '3'
        },
        {
            name: 'Selfie Stick',
            quantity: '1'
        },
        {
            name: 'Snickers',
            quantity: '5'
        }
    ];

    service.addItem = function(itemName, quantity){
        var item = {
            name: itemName,
            quantity: quantity
        };
        TBitems.push(item);
    }

    service.moveItem = function(index) {
        ABitems.push(TBitems[index]);
        TBitems.splice(index,1);
    };

    service.getTBItems = function(){
        return TBitems;
    };

    service.getABItems = function(){
        return ABitems;
    };
}


})();