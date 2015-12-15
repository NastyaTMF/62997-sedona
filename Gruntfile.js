"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

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
      }
  });
  grunt.registerTask("build", [
      "less",
      "cmq",
      "postcss",
      "cssmin"
  ]);
          
  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  
};
