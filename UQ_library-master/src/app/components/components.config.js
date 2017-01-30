(function () {
    'use strict';

    angular
        .module('app.components')

        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider

            .state('uql.webapp.components', {
                abstract: true,
                template: "<ui-view></ui-view>"
                // url: '/service'
            })


            /*======================Begin of public======================*/
            .state('uql.webapp.components.public', {
                abstract: true,
                url: '',
                templateUrl: 'app/components/public/layout/public.layout.tmpl.html'
            })

            .state('uql.webapp.components.public.libraries', {
                url: '/libraries',
                templateUrl: 'app/components/public/libraries/views/public.libraries-list.tmpl.html',
                controller: 'librariesListController',
                controllerAs: 'vm'
            })
            .state('uql.webapp.components.public.library-details', {
                url: '/{libraryId:int}',
                templateUrl: 'app/components/public/libraries/views/public.libraries.details.tmpl.html',
                controller: 'librariesDetailsController',
                controllerAs: 'vm'
            })

            /*======================End of public=========================*/

            /*======================Begin of admin======================*/
            .state('uql.webapp.components.admin', {
                abstract: true,
                url: '',
                templateUrl: 'app/components/admin/layout/admin.layout.tmpl.html'
            })

            .state('uql.webapp.components.admin.create-libraries', {
                url: '/new',
                templateUrl: 'app/components/admin/libraries/views/admin.create-library.tmpl.html',
                controller: 'adminCreateLibraryController',
                controllerAs: 'vm'
            });


        /*======================End of admin=========================*/
        triMenuProvider.addMenu({
            name: 'Libraries',
            type: 'link',
            icon: 'fa fa-building-o',
            state: 'uql.webapp.components.public.libraries'
        });

        triMenuProvider.addMenu({
                name: 'Admin',
                type: 'dropdown',
                icon: 'fa fa-lock',
                children: [
                    {
                        name: 'Libraries',
                        type: 'dropdown',
                        icon: 'fa fa-building-o'
                        , children: [
                        {
                            name: 'Create',
                            type: 'link',
                            icon: 'fa fa-plus',
                            state: 'uql.webapp.components.admin.create-libraries'

                        }
                    ]

                    }
                ]
            }
        );

    }


})();
