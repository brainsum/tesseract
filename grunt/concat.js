/**
 * grunt-contrib-concat
 * @see
 */

module.exports = {

  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },

  dist: {
    src: ['src/scripts/**/*.js'],
    dest: 'js/scripts.js'
  }

};
