'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope',function ($scope) {
        $scope.tests = [{
                name: 'test1',
                nestedElements: [{name: 'test1.subtest1'}, {name: 'test1.subtest2'}]
            },
            {
                name: 'test2',
                nestedElements: [{name: 'test2.subtest1'}, {name: 'test2.subtest2'}, {name: 'test2.subtest3'}]
            }
        ];
    }]);