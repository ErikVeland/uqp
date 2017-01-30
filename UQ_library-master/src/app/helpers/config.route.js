(function () {
    'use strict';

    angular
        .module('helpers')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('uql', {
                abstract: true,
                templateUrl: 'app/helpers/layouts/default/default.tmpl.html',
                controller: 'DefaultLayoutController',
                controllerAs: 'layoutController'
            })
            .state('uql-no-scroll', {
                abstract: true,
                templateUrl: 'app/helpers/layouts/default/default-no-scroll.tmpl.html',
                controller: 'DefaultLayoutController',
                controllerAs: 'layoutController'
            })
            .state('uql.webapp', {
                abstract: true,

                views: {
                    sidebarLeft: {
                        templateProvider: function ($templateCache, $http, triLayout) {
                            return $http.get(triLayout.layout.sidebarLeftTemplateUrl, {cache: $templateCache})
                                .then(function (response) {
                                    return response.data;
                                });
                        },
                        controllerProvider: function (triLayout) {
                            return triLayout.layout.sidebarLeftController;
                        },
                        controllerAs: 'vm'
                    },
                    sidebarRight: {
                        templateProvider: function ($templateCache, $http, triLayout) {
                            return $http.get(triLayout.layout.sidebarRightTemplateUrl, {cache: $templateCache})
                                .then(function (response) {
                                    return response.data;
                                });
                        },
                        controllerProvider: function (triLayout) {
                            return triLayout.layout.sidebarRightController;
                        },
                        controllerAs: 'vm'
                    },
                    toolbar: {
                        templateProvider: function ($templateCache, $http, triLayout) {
                            return $http.get(triLayout.layout.toolbarTemplateUrl, {cache: $templateCache})
                                .then(function (response) {
                                    return response.data;
                                });
                        },
                        controllerProvider: function (triLayout) {
                            return triLayout.layout.toolbarController;
                        },
                        controllerAs: 'vm'
                    },
                    content: {
                        templateProvider: function ($templateCache, $http, triLayout) {
                            return $http.get(triLayout.layout.contentTemplateUrl, {cache: $templateCache})
                                .then(function (response) {
                                    return response.data;
                                });
                        }
                    },
                    belowContent: {
                        template: '<div ui-view="belowContent"></div>'
                    }
                }
            })
            .state('uql.webapp-no-scroll', {
                abstract: true,
                views: {
                    sidebarLeft: {
                        templateUrl: 'app/helpers/components/menu/menu.tmpl.html',
                        controller: 'MenuController',
                        controllerAs: 'vm'
                    },
                    sidebarRight: {
                        templateUrl: 'app/helpers/components/notifications-panel/notifications-panel.tmpl.html',
                        controller: 'NotificationsPanelController',
                        controllerAs: 'vm'
                    },
                    toolbar: {
                        templateUrl: 'app/helpers/components/toolbars/toolbar.tmpl.html',
                        controller: 'DefaultToolbarController',
                        controllerAs: 'vm'
                    },
                    content: {
                        template: '<div flex ui-view layout="column" class="overflow-hidden"></div>'
                    }
                }
            });
    }
})();
