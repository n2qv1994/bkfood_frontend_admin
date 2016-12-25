'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('MainCtrl', function($rootScope) {
        if ($rootScope.admin == 'admin') {
            $('.admin').show();
        }
    });