/* globals angular, beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('hbz-age-gate', function() {
    var elm, scope;

    // load the code
    beforeEach(module('hbz.age-gate'));

    // load the template
    beforeEach(module('ageGate.tmpl'));

    beforeEach(inject(function($rootScope, $compile) {
        elm = angular.element('<hbz-age-gate></hbz-age-gate>');

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should have select elements', inject(function() {
        var selectElements = elm.find('select');

        expect(selectElements).to.have.length(3);
    }));
});
