/*
The JS Library for AngularCalc
 */
'use strict';

// Here we describe the angular module
var app = angular.module('angularcalcApp',[]);

// Here we configurate start and end symbols in the twig template
app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

/*
The main controller for the calculator
 */
app.controller('angularcalcCtrl', function($scope){
    $scope.currentNumber = '0';
    $scope.prevNumber = '0';
    $scope.operation = '';
});

/*
The directive for buttons of the calculator
 */
app.directive('acButton', function(){
    return {
        transclude: true,
        restrict: 'E',
        scope: false,
        template: '<button><ng-transclude></ng-transclude></button>',
        link: function(scope, element, attrs, ctrl, transclude){
            var cmd = element[0].textContent;
            element.on('click', function(event){
                var key = this.innerText;

                // If inputed key is a digit
                if (_.indexOf(['0','1','2','3','4','5','6','7','8','9'], key)!=-1){

                    scope.currentNumber = _.toString(_.toNumber(scope.currentNumber)*10 + _.toNumber(key));
                }
                else

                // If inputed key is an arithmetic operation
                if (_.indexOf(['+','-','*','/', 'pow'], key)!=-1){
                    scope.prevNumber = scope.currentNumber;
                    scope.currentNumber = '0';
                    scope.operation = key;
                }
                else

                // Here we are calculating the value of our expression
                if (key == '='){
                    var n1 = _.toNumber(scope.prevNumber);
                    var n2 = _.toNumber(scope.currentNumber);
                    var result = 0;
                    switch (scope.operation) {
                        case '+':
                            result = n1 + n2;
                            break;
                        case '-':
                            result = n1 - n2;
                            break;
                        case '*':
                            result = n1 * n2;
                            break;
                        case '/':
                            result = n1 / n2;
                            break;
                        case 'pow':
                            result = Math.pow(n1, n2);
                            break;
                    }

                    scope.currentNumber = _.toString(result);
                    scope.prevNumber = '0';
                    scope.operation = '';
                }

                // Unary operation. Here we needn't press the "=" key.
                if (_.indexOf(['sqrt'], key)!=-1){
                    var n1 = _.toNumber(scope.currentNumber);
                    var result = 0;

                    switch (key) {

                        // Squared root
                        case 'sqrt':
                            result = Math.sqrt(n1);
                    };

                    scope.currentNumber = _.toString(result);
                }

                // cancellation of the operation
                if (key == 'C'){
                    scope.currentNumber = 0;
                    scope.prevNumber = 0;
                    scope.operation = '';
                }
                scope.$apply();

            })
        }
    };
})
