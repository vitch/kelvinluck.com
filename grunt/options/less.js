  module.exports = function(grunt) {
  return {
    site: {
      options: {
        compress: grunt.isProduction,
        paths: ['src/styles', 'vendor/bootstrap/less']
      },
      files: {
        'out/styles/styles.css': 'src/styles/styles.less'
      }
    }
  };
};