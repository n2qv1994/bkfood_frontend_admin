'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:ApptourCtrl
 * @description
 * # ApptourCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('ApptourCtrl', function($scope, $rootScope) {
        if ($rootScope.admin == 'admin') {
            $('.admin').show();
        }
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
                    $scope.customers = _customer;
                    $scope.providers = _provider;
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

        $scope.detele_user = function(userid) {
            $.ajax({
                url: "http://localhost:3000/api/deleteuser/" + userid,
                type: "get",
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: "json",
                success: function(result) {
                    console.log(result);
                    $("#" + userid).remove();
                },
                error: function(result) {
                    // $rootScope.message_res = result.responseText;
                    // $("#wrong").show();
                    // console.log(result.responseText);
                    console.log("err");
                }
            });
        }
    });