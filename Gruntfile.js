'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var connect = require('connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },
    watch: {
      spec: {
        files: ['js/**/*'],
	tasks: []
      }
    }
  });

  grunt.registerTask('launch', ['connect', 'watch']);
};
