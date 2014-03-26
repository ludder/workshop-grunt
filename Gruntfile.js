/*global module */
module.exports = function (grunt) {

    'use strict';

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
        }

    });

    /* Load tasks*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Registered tasks */
    grunt.registerTask('default', ['test']);

    grunt.registerTask('test', ['clean', 'sass', 'csslint', 'jshint']);
    grunt.registerTask('serve', ['clean', 'sass', 'connect', 'watch']);
};
