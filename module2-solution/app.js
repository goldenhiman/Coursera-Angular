(function(){
'use strict';

var app = angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var tbc = this;

    tbc.itemName = "";
    tbc.itemQuantity = "";

    tbc.addItem = function(){
        ShoppingListCheckOffService.addItem(tbc.itemName,tbc.itemQuantity);
    }

    console.log("YESSS");
    tbc.TBitems = ShoppingListCheckOffService.getTBItems();
    console.log(tbc.TBitems[0].name);
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

    service.removeItem = function(index) {
        ABitems.push(TBitems[index]);
        TBitems.splice(index,1);
    }

    service.getTBItems = function(){
        return TBitems;
    }

    service.getABItems = function(){
        return ABitems;
    }
}


})();