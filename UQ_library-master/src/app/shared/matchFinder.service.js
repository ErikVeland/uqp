/**
 * Created by Mani on 11/01/2017.
 */
(function () {
    'use strict';

    /* @ngInject */
    function matchFinder() {


        function findComputerAvailabilityByLibraryName(computerAvailabilitiesList, libraryName) {
            var libraryNameSignature = findLibraryNameSignature(libraryName);
            var libraryComputerAvailabilityList = {};
            for (var i = 0; i < computerAvailabilitiesList.length; i++) {
                var item = computerAvailabilitiesList[i];
                var computerLibraryNameSignature = findLibraryNameSignature(item.library);
                var numberOfSimilarSignatureItemsWithBuildingCode = _.intersectionWith(libraryNameSignature, item.buildingCode, _.isEqual).length;
                if (numberOfSimilarSignatureItemsWithBuildingCode > 0) {
                    libraryComputerAvailabilityList = item;
                    break;
                }
                var numberOfSimilarSignatureItems = _.intersectionWith(libraryNameSignature, computerLibraryNameSignature, _.isEqual).length;
                var differenceArray1 = _.difference(libraryNameSignature, computerLibraryNameSignature);
                var differenceArray2 = _.difference(computerLibraryNameSignature, libraryNameSignature);
                var tempArray1 = [];
                var tempArray2 = [];
                angular.forEach(differenceArray1, function (differenceItem) {
                    tempArray1.push(differenceItem[0]);
                });
                angular.forEach(differenceArray2, function (differenceItem) {
                    tempArray2.push(differenceItem[0]);
                });
                if (_.isEqual(tempArray1, tempArray2)) {
                    numberOfSimilarSignatureItems += tempArray1.length;
                }
                if (numberOfSimilarSignatureItems == computerLibraryNameSignature.length) {
                    libraryComputerAvailabilityList = item;
                    break;
                }
            }
            if (angular.equals(libraryComputerAvailabilityList, {})) libraryComputerAvailabilityList = false;
            return libraryComputerAvailabilityList;
        }

        function findLibraryNameSignature(libraryName) {
            var nameSignature = [];
            var wordsArray = _.words(_.replace(libraryName.toLowerCase(), /(\&amp;|and|building|tower|library|campus|graduate|hospital|sciences|\-|\.|\&)/ig, ' '));
            var wordsFirstLetterArray = [];
            angular.forEach(wordsArray, function (word) {
                wordsFirstLetterArray.push(word[0].toLowerCase())
            });
            nameSignature = _.union(wordsArray, wordsFirstLetterArray);
            return nameSignature;
        }


        return {
            findComputerAvailabilityByLibraryName: findComputerAvailabilityByLibraryName,
            findLibraryNameSignature: findLibraryNameSignature
        };
    }

    angular.module('common.module').factory('matchFinder', matchFinder);


})();

