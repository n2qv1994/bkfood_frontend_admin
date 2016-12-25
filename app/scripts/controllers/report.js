'use strict';

/**
 * @ngdoc function
 * @name bkfoodadminApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the bkfoodadminApp
 */
angular.module('bkfoodadminApp')
    .controller('ReportCtrl', function($rootScope) {
        if ($rootScope.admin == 'admin') {
            $('.admin').show();
        }
    });