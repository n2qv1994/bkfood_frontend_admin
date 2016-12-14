'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('LoginCtrl', function($scope, $location) {
        $scope.login1 = function() {
        	console.log("login");
        	console.log($("#username").val());
            var data = {
                username: $("#username").val(),
                password: $("#password").val()
            };
            $.ajax({
                url: "http://localhost:3000/api/signin",
                type: "post",
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType: "json",
                success: function(result) {
                	console.log("success");
                	console.log(result);
                	$location.path("/home");
                },
                error: function(result) {
                    console.log(result);
                }
            });
        };
    });