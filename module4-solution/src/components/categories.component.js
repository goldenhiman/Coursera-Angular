angular.module('data')
.component('categoriesView',{
    templateUrl: 'categories.html',

    bindings: {
        list: '<'
    }
});