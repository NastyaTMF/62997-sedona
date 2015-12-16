"use strict";
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
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
        src: "build/css/*.css"
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

    clean: {
        build: ["build"]
    },
        
    copy: {
        build: {
            files: [{
                expand: true,
                cwd: "source",
                src: [
                    "img/**",
                    "js/**",
                    "index.html",
                    "form.html"
                ],
                dest: "build"
            }]
        }
    }, 
    
    cmq: {
       style: {
           files: {
               "build/css/style.css": ["build/css/style.css"]
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
               src: ["build/img/**/*.{img,jpg,gif,svg}"]
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
                "build/css/style.min.css": ["build/css/style.css"]
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
      "clean",
      "copy",
      "less",
      "cmq",
      "postcss",
      "csscomb",
      "imagemin",
      "cssmin",
  ]);
};
