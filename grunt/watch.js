/**
 * grunt-contrib-watch
 * @see
 */

module.exports = {

  options: {
    spawn: false,
  },

  js: {
    files: ['<%= paths.srcJS %>/**/*.js'],
    tasks: ['concat', 'uglify'],
  },

  css: {
    files: '<%= paths.srcSASS %>/**/*.{sass,scss}',
    tasks: ['sass', 'autoprefixer', 'cssmin']
  },
};
