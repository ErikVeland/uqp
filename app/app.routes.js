/**
 * Created by ErikVeland on 24/11/2016.
 */
angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('libraries', {
            url: '/',
            title:'Libraries', //title can be used for dynamic header, SEO
            templateUrl: 'app/libraries/libraries.html',
            controller: 'LibrariesCtrl as vm'
            /* resolve can be used for better UX with page loading,
            however there should be a loader UI
            resolve: {
                libraryPrepService: libraryPrepService
            }*/
        })
        .state('library-new',{
            url: '/new',
            title: 'New Library', //title can be used for dynamic header, SEO
            templateUrl: 'app/library-new/library-new.html',
            controller: 'LibraryNewCtrl as vm'
        })
        .state('computer-availability',{
            url: '/computers',
            title: 'Computer Availability', //title can be used for dynamic header, SEO
            templateUrl: 'app/computer-availability/computer-availability.html',
            controller: 'ComputerAvailabilityCtrl as vm'
        })
        .state('library-detail',{
            url: '/{libraryId}',
            title: 'Library Information', //title can be used for dynamic header, SEO
            templateUrl: 'app/library-detail/library-detail.html',
            controller: 'LibraryDetailCtrl as vm',
            params: {'libraryId':null}
        });







};

function libraryPrepService(libraryService) {
    return libraryService.getAllLibraries();
}


