/**
 * Created by Mani on 11/01/2017.
 */
(function () {
    'use strict';

    /* @ngInject */
    function apiRef($resource, appSettings) {
        var customOperations = {
            'update': {method: 'PUT'},
            'post': {method: 'POST'},
            'patch': {method: 'PATCH'},
            headers: {'Content-Type': 'application/json'}
        };


        var endPoints = {
            libraryHours: $resource(appSettings.apiUri + '/v2/library_hours/:id', null, customOperations),
            computerAvailability: $resource(appSettings.apiUri + '/computer_availability/:id', null, customOperations)

        };


        var endPoint = function (param) {
            return endPoints[param]
        };

        return {

            endPoint: endPoint

        };
    }

    angular.module('common.module').factory('apiRef', apiRef);


})();

