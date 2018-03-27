angular.module('data')
.controller('CategoriesController',CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories){
    var cat = this;

    cat.ctgry = categories;
    console.log(cat.ctgry);
    
}