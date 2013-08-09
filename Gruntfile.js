module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      separator: ';',
      dist: {
        src: ['app/**/*.js'],
        dest: 'js/app.js'
      }
    },
    jshint: {
      filtes: ['app/**/*.js']
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint', 'concat']);
};
