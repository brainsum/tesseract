/**
 * grunt-contrib-watch
 * @see
 */

module.exports = {

  options: {
    spawn: false,
  },

  js: {
    files: ['src/scripts/**/*.js'],
    tasks: ['concat', 'uglify'],
  },

  css: {
    files: 'src/sass/**/*.{sass,scss}',
    tasks: ['sass', 'autoprefixer']
  },
};
