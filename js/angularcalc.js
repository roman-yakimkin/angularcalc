/*
The JS Library for AngularCalc
 */
'use strict';

var angularcalcApp = angular.module('angularcalcApp',[]);

angularcalcApp.controller('angularcalcCtrl', function($scope){

    $scope.st = '0';

    $scope.name = 'AngularCalc';

    $scope.processButton = function(ev){
        alert(ev.currentTarget.innerHTML);
    };
});
