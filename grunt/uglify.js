/**
 * grunt-contrib-uglify
 * @see
 */

module.exports = {

  options: {
    banner: '<%= banner %>'
  },

  files: {
    src: 'js/scripts.js',
    dest: 'js/scripts.min.js'
  }

};
