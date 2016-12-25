'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('ChartsCtrl', function($rootScope) {
        if ($rootScope.admin == 'admin') {
            $('.admin').show();
        }
    });