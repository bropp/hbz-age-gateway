/**
 * This directive for an age verification gateway.
 */

/* globals angular, moment */
'use strict';

var component = angular.module('hbz.age-gate', ['ngCookies']);

component.directive('hbzAgeGate', function($cookieStore) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'ageGate.tmpl',
        //scope: {
        //    isValidated: false
        //},
        link: function (scope) {
            var indexToDropBox = function (index) {
                return { id: index, value: index };
            };

            Array.range = function(from, to, step){
                if(typeof from === 'number'){
                    var A = [from];
                    step = typeof step === 'number'? Math.abs(step):1;
                    if(from> to){
                        while((from -= step) >= to) {
                            A.push(from);
                        }
                    }
                    else {
                        while((from += step) <= to) {
                            A.push(from);
                        }
                    }
                    return A;
                }
            };

            scope.days = Array.range(1,31,1).map(indexToDropBox);
            scope.months = Array.range(1,12,1).map(indexToDropBox);
            scope.years = Array.range(1900,moment().year(),1).map(indexToDropBox);

            function dateDiff (birthDate) {
                if (birthDate.isValid()) {
                    var todayDate = moment();
                    return todayDate.diff(birthDate, 'years');
                }

                return undefined;
            }

            scope.validate = function (month, day, year) {
                var lastValidated = $cookieStore.get('lastValidated');
                if (typeof lastValidated !== 'undefined' && moment().diff(moment(lastValidated), 'days') < 30) {
                    month = $cookieStore.get('month');
                    day = $cookieStore.get('day');
                    year = $cookieStore.get('year');
                }

                var age;
                var birthDate = moment([year, month - 1, day]);
                if (birthDate.isValid()) {
                    age = dateDiff(birthDate);
                }

                if (typeof age !== 'undefined' && age >= 21) {
                    $cookieStore.put('lastValidated', moment().toISOString());
                    $cookieStore.put('month', month);
                    $cookieStore.put('day', day);
                    $cookieStore.put('year', year);
                    scope.isValidated = true;
                } else {
                    scope.isValidated = false;
                }
            };

            scope.validate(null,null,null);
        }
    };
});
