angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

    // Default 
    $urlRouterProvider.otherwise('/home');

    // states
    $stateProvider
    .state('home',{
        url: '/home',
        templateUrl: 'src/templates/home.html'
    })
    .state('categories',{
        url: '/categories',
        templateUrl: 'src/templates/categories.html',
        controller: 'CategoriesController as cat',
        resolve: {
            categories: ['MenuDataService',function (MenuDataService){
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('items',{
        url: '/items/{short_name}',
        templateUrl: 'src/templates/items.html',
        controller: 'ItemsController as it',
        resolve: {
            items: ['$stateParams','MenuDataService',function ($stateParams, MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.short_name);
            }]
        }
    });
}