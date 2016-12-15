'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:ManagementCtrl
 * @description
 * # ManagementCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('ManagementCtrl', function($scope) {
        var product_id = "";
        $.ajax({
            url: "http://localhost:3000/api/getallproduct",
            type: "get",
            headers: {
                'Content-Type': 'application/json'
            },
            dataType: "json",
            success: function(result) {
                console.log(result[0]);
                $scope.$apply(function() {
                    $scope.list_product = result;
                });
            },
            error: function(result) {
                // $rootScope.message_res = result.responseText;
                // $("#wrong").show();
                // console.log(result.responseText);
                console.log("err");
            }
        });

        $scope.remove_product = function(product) {
            // $("#removeModal").modal("show");
            $("#delete_product").on('click', function() {
                $.ajax({
                    url: "http://localhost:3000/api/removeproduct/" + product._id,
                    type: "get",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    dataType: "json",
                    success: function(result) {
                        console.log(result);
                        $("#" + product._id).remove();
                    },
                    error: function(result) {
                        // $rootScope.message_res = result.responseText;
                        // $("#wrong").show();
                        // console.log(result.responseText);
                        console.log("err");
                    }
                });
            });
        };
        $scope.info_product = function(product) {
            product_id = product._id;
            $scope.name_product = product.product_name;
            $scope.provider_product = product.provider_id;
            $scope.price_product = product.price;
            $scope.unit_product = product.unit;
            $scope.category_product = product.category;
            $scope.image_product = product.image
            $scope.description_product = product.description;
        };

    });