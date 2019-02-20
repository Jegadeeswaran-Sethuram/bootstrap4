'use strict';

module.exports = function(grunt){

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
       //Object Type Definitions for Congfig's
        saas:{
            dist:{
                files:{
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch:{
            files: 'css/*.scss',
            tasks:['sass']
        },
        browserSync : {
            bsFiles:{
                src:[
                    'css/*.css',
                    '*.html',
                    'js/*.js'
                ]
            },
        options:{
            watchTask  :true,
            server:{
                baseDir: "./"
            }
        }
        }
    });

    grunt.registerTask('css',['scss']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};