/*global module */
module.exports = function (grunt) {

    // 'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
            1. Connect
            2. Livereload (preparation)
        */
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '*',
                    base: '.',
                    open: true,
                    // keepalive: true, // Should be disabled when 'watch' is connected
                    livereload: true
                }
            }
        },

        /*
            3. Livereload
            4. Sass
         */
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['**/*.html']
            },
            /* Added in step 4. Sass */
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            /* Added in step 7. JSHint */
            js: {
                files: ['javascript/**']
            },
        },

        /*
            4. Sass
         */
        sass: {
            options: {
                sourcemap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        /*
            5. Clean
         */
        clean: {
            css: ['css']
        },

        /*
            6. CSS Lint
         */
        csslint: {
            options: {
                csslintrc: '.csslintrc',
            },
            src: 'css/**/*.css'
        },

        /*
            7. JSHint
         */
        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            src: 'javascript/**/*.js' // without .js folders are counted too
        },

        /*
            8. PhantomCSS
         */
        phantomcss: {
            desktop: {
                options: {
                    screenshots: 'test/visual/desktop/',
                    results: 'results/visual/desktop',
                    viewportSize: [1024, 768]
                },
                src: [
                    'test/visual/**.js'
                ]
            },
            mobile: {
                options: {
                    screenshots: 'test/visual/mobile/',
                    results: 'results/visual/mobile',
                    viewportSize: [320, 480]
                },
                src: [
                    'test/visual/**.js'
                ]
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'javascript/',
                src: '**',
                dest: 'dest/',
                flatten: true,
                filter: 'isFile',
                mode:0777
            },
        },

    });

    /* Load tasks*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-phantomcss');

    /* Registered tasks */
    grunt.registerTask('default', ['test']);

    grunt.registerTask('test', ['clean', 'sass', 'csslint', 'jshint', 'phantomcss']);
    grunt.registerTask('serve', ['clean', 'sass', 'connect', 'watch']);
};
