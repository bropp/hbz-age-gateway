/*
 * config/karma.conf.js
 *
 * Karma unit testing configuration
 */

'use strict';

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/chai/chai.js',
            // needed for elem.find() lookup by other than tag name
            'bower_components/jquery/jquery.js',

            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-cookies/angular-cookies.js',

            'bower_components/moment/moment.js',

            'src/**/*.js',
            'src/**/*.tmpl',
            'src/**/*.css',

            'test/unit/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // generate js files from html templates
        preprocessors: {
            'src/*.tmpl': ['ng-html2js']
        },


        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'src/'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
