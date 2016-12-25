'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('LoginCtrl', function($scope, $location, $rootScope) {
        $scope.login1 = function() {
            var data = {
                username: $("#username").val(),
                password: $("#password").val()
            };
            if ($("#username").val() == 'admin') {
                
                     $rootScope.admin = 'admin';
                
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
                	console.log(result);
                	$location.path("/home");
                },
                error: function(result) {
                    console.log(result);
                }
            });
        };
    });