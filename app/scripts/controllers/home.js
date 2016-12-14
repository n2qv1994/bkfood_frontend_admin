'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('HomeCtrl', function($scope) {
        $.ajax({
            url: "http://localhost:3000/api/getallproduct",
            type: "get",
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: "json",
            success: function(result) {
                $scope.$apply(function() {
                    $scope.product = result.length;
                });
            },
            error: function(result) {
                console.log({
                    message: {
                        error: true
                    }
                });
            }
        });
        $.ajax({
            url: "http://localhost:3000/api/getallusers",
            type: "get",
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: "json",
            success: function(result) {
                console.log(result);
                var _customer = [];
                var _provider = [];
                for (var i = 0; i < result.length; i++) {
                    if (result[i].role == true) {
                        _provider.push(result[i]);
                    } else {
                        _customer.push(result[i]);
                    }
                }
                $scope.$apply(function() {
                    $scope.customer = _customer.length;
                    $scope.provider = _provider.length;
                });

            },
            error: function(result) {
                console.log({
                    message: {
                        error: true
                    }
                });
            }
        });
    });