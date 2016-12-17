'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:AddmodCtrl
 * @description
 * # AddmodCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('AddmodCtrl', function($scope) {

        var category = $("#category_add").val();

        $scope.add_mod = function() {
            console.log("username1: " + category);
            if ($("#username_add").val() == "") {
                $("#notification").show();
                $("#notification1").hide();
                $scope.notification = "Enter username";
                return;
            }
            if ($("#pwd_add").val() == "") {
                $("#notification").show();
                $scope.notification = "Enter password";
                $("#notification1").hide();
                return;
            }
            if ($("#pwd_add").val() != $("#confirm_pwd_add").val()) {
                $("#notification").show();
                $scope.notification = "password not match";
                $("#notification1").hide();
                return;
            } else {
                var data = {
                    username: $("#username_add").val(),
                    password: $("#pwd_add").val(),
                    category: $("#category_add").val()
                }
                $.ajax({
                    url: "http://localhost:3000/api/addmod",
                    type: "post",
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    dataType: "json",
                    success: function(result) {
                        console.log(result);
                        $("#notification").hide();
                        $("#notification1").show();
                        $("#username_add").val("");
                        $("#pwd_add").val("");
                        $("#confirm_pwd_add").val("");
                    },
                    error: function(result) {
                        $scope.$apply(function() {
                            $scope.notification = result.responseText;
                            $("#notification").show();
                            $("#notification1").hide();
                        });

                    }
                });
            }
        }

    });