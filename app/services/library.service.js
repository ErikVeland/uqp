/**
 * Created by ErikVeland on 24/11/2016.
 */
angular
    .module('app')
    .service('libraryService', libraryService);

libraryService.$inject = ['$http','$q'];

function libraryService($http, $q, exception, logger) {
    return {
        getAllLibraries: getAllLibraries,
        getLibrary:getLibrary,
        getComputerAvailability:getComputerAvailability
    };

    function getAllLibraries() {
        return $http.jsonp('https://app.library.uq.edu.au/api/v2/library_hours/day?callback=JSON_CALLBACK')
            .then(getAllLibrariesComplete)
            .catch(getAllLibrariesFailed);
    };


    function getAllLibrariesComplete(data, status, headers, config) {
        return data.data;
    }


    function getAllLibrariesFailed(e) {
        var newMessage = 'XHR Failed for getLibrary'
        if (e.data && e.data.description) {
            newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        logger.error(newMessage);
        return $q.reject(e);
    }

    function getComputerAvailability() {
        return $http.jsonp('https://app.library.uq.edu.au/api/computer_availability?callback=JSON_CALLBACK')
            .then(getAllLibrariesComplete)
            .catch(getAllLibrariesFailed);
    }

    function getLibrary(libID)
    {
        return $http.jsonp('https://app.library.uq.edu.au/api/v2/library_hours/week?lid='+libID+'&callback=JSON_CALLBACK')
            .then(getAllLibrariesComplete)
            .catch(getAllLibrariesFailed);
    }

}
