angular.module('data')
.component('items',{
    templateUrl: 'items.html',

    bindings: {
        list: '<'
    }
});