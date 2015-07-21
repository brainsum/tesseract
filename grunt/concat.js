/**
 * grunt-contrib-concat
 * @see
 */

module.exports = {

  options: {
    banner: '<%= banner %>',
    stripBanners: false
  },

  dist: {
    src: ['src/scripts/**/*.js'],
    dest: 'js/scripts.js'
  }

};
