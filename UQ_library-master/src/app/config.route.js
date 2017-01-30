(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        // Setup the apps routes

        // 404 & 500 pages
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: '404.tmpl.html',
                controllerAs: 'vm',
                controller: function ($state, $rootScope) {
                    var vm = this;
                    vm.goHome = function () {
                        $state.go('uql.webapp.components.public.libraries');
                    };
                }
            })
            .state('401', {
                url: '/401',
                templateUrl: '401.tmpl.html',
                controllerAs: 'vm',
                controller: function ($state, $rootScope) {
                    var vm = this;
                    vm.goHome = function () {
                        $state.go('uql.webapp.components.public.libraries');
                    };
                }
            })

            .state('500', {
                url: '/500',
                templateUrl: '500.tmpl.html',
                controllerAs: 'vm',
                controller: function ($state, $rootScope) {
                    var vm = this;
                    vm.goHome = function () {
                        $state.go('uql.webapp.components.public.libraries');
                    };
                }
            })

        ;


        // set default routes when no path specified
        $urlRouterProvider.when('', function ($state, $rootScope) {
            $state.go('uql.webapp.components.public.libraries');
        });

        $urlRouterProvider.when('/', function ($state, $rootScope) {
            $state.go('uql.webapp.components.public.libraries');
        });

        // always goto 404 if route not found
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go('404');
        });
        //  $urlRouterProvider.otherwise('/404');

    }
})();
