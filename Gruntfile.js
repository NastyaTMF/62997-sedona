"use strict";
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
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
    }
  };
  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);
  grunt.initConfig({
      less: {
          style: {
              files: {
                  "css/style.css": ["less/style.less"]
              }
          }
      },
      cmq: {
         style: {
             files: {
                 "css/style.css": ["css/style.css"]
             }
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
      postcss: {
          options: {
              processors: [
                  require("autoprefixer")({browsers: "last 2 versions"})
              ]
          },
          style: {
              src: "css/style.css"
          }
      },
      watch: {
          style: {
              files: ["less/**/*.less"],
              tasks: ["less", "cmq", "postcss"]
          }
      },
      csscomb: {
          style: {
              expand: true,
              src: ["less/**/*.less"]
          }
      }
  });
  grunt.registerTask("build", [
      "less",
      "cmq",
      "postcss",
      "cssmin",
  ]);
};