//jshint strict: false
module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],//, 'Firefox'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage' // required for coverage
        ],

        basePath: './',

        files: [
            'app/lib/jquery/dist/jquery.js',
            'app/lib/angular/angular.js',
            'app/lib/angular-resource/angular-resource.js',
            'app/lib/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app.js',
            'tournament/core/*.js',
            'tournament/**/*.js',
            'crmUtil.js',
            'unit-tests/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        // Code coverage report
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'tournament/*/*.js': ['coverage'],
            'tournament/*/*/*.js': ['coverage']
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'coverage'
            }, { type: 'text' }]
        },

    });
};