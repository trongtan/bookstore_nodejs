
module.exports = function(grunt) {
  grunt.config.set('coveralls', {
    your_target: {
      src: 'coverage/lcov.info'
    }
  });
  grunt.loadNpmTasks('grunt-coveralls');
}
