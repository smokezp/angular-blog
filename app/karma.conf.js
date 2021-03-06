// Karma configuration
// Generated on Tue Apr 18 2017 14:55:10 GMT+0300 (EEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'libs/angular/angular.js',
            'libs/angular-mocks/angular-mocks.js',
            'libs/angular-animate/angular-animate.js',
            'libs/angular-cookies/angular-cookies.js',
            'libs/angular-resource/angular-resource.js',
            'libs/angular-route/angular-route.js',
            // 'modules/posts/views/allPosts.html',
            //'../modules/posts/js/controllers/PostController.js',
            //'../index.html',

            'js/app.js',
            'modules/**/*.js',
            'modules/**/*.html',

            //'*.json',

            {pattern: '*.json', watched: true, served: true, included: false}


            //, "modules/posts/views/allPosts.html"
            // '../modules/links/js/directives/*.js',
            // '../modules/login/js/directives/*.js',
            // '../modules/posts/js/controllers/*.js',
            //'unit/*.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'js/app.js': ['coverage'],
            'modules/**/*.js': ['coverage'],
            "modules/**/*.html": ["ng-html2js"]
            //'*.json': ['ng-html2js']
            //, "app/modules/posts/views/allPosts.html": ["ng-html2js"]
        },


        ngHtml2JsPreprocessor: {
            //stripPrefix: 'modules/',
            moduleName: 'templates'
        },

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-ng-html2js-preprocessor',
            'karma-chrome-launcher'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //  browsers: ['PhantomJS'],
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,


        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }


    })
};
