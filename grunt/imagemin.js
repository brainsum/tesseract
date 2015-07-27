/**
 * grunt-contrib-imagemin
 * @see https://github.com/gruntjs/grunt-contrib-imagemin
 *
 * @todo  DOESN'T WORK YET
 */

module.exports = {

  // 'static': {
  //   options: {
  //     optimizationLevel: 7,
  //   },

  //   files: {
  //     '<%= paths.img %>/': '<%= paths.img %>/**/*.{png,gif,jpg,jpeg}'
  //   }
  // },

  dynamic: {
    files: [{
      expand: true,
      cwd: 'dist/img',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dist/img/build'
    }]
  }
};