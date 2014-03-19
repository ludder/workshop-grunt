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
                    open: 'http://localhost:9001/index.html', // TODO does not work why?
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
        },

        /*
            4. Sass
         */
        sass: {
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
        }

    });

    /* Load tasks*/
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    /* Registered tasks */
    grunt.registerTask('default', ['connect', 'watch']);

    grunt.registerTask('serve', ['clean', 'sass', 'connect', 'watch']);

};