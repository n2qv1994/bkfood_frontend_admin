'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('AdminCtrl', function($scope) {
        // $scope.moderators = "";
        $.ajax({
            url: "http://localhost:3000/api/getallmod",
            type: "get",
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: "json",
            success: function(result) {
                console.log(result);
                $scope.$apply(function() {
                    $scope.moderators = result;
                    console.log("a" + $scope.moderators);
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

        $scope.detele_mod = function(userid) {
            $.ajax({
                url: "http://localhost:3000/api/deletemod/" + userid,
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