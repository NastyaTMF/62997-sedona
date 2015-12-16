"use strict";
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    copy: {
        build: {
            files: [{
                expand: true,
                cwd: "source",
                src: [
                    "img/**",
                    "js/**",
                    "index.html"
                    ],
            dest: "build"
            }]
        }
    }, 
      
    cmq: {
       style: {
           files: {
               "css/style.css": ["css/style.css"]
           }
       }
    },

    imagemin: {
       images: {
           options: {
               optimizationLevel: 3
           },
           files: [{
               expand: true,
               src: ["img/**/*.{img,jpg,gif,svg}"]
           }]
       }
    },
      
    cssmin: {
        options: {
            keepSpecialComments: 0,
            report: "gzip"
        },
        style: {
            files: {
                "css/style.min.css": ["css/style.css"]
            }
        }
    },
      
    csscomb: {
        dist: {
            options: {
                config: '.csscomb.json'
            },
            files: {
                'css/style.css': ['css/style.css']
            }
        }
    }
          
  });
  // Не редактируйте эту строку
  //config = require("./.gosha")(grunt, config);


  grunt.registerTask("build", [
      "less",
      "cmq",
      "postcss",
      "csscomb",
      "imagemin",
      "cssmin",
      "copy"
  ]);
};
