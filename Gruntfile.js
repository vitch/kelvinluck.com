/*
 * kelvinluck.com
 * kelvinluck.com
 *
 * Copyright (c) 2014 Kelvin Luck
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Load config and initialise...
  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, 'grunt/options'),
    init: true
  });

  grunt.registerTask('build', ['clean', 'copy:main', 'less', 'haggerston', 'notify:build']);

  grunt.registerTask('serve', ['build', 'connect', 'watch']);

  grunt.registerTask('default', ['build']);

};
