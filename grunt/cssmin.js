/**
 * grunt-contrib-cssmin
 * @see https://github.com/gruntjs/grunt-contrib-cssmin
 */

module.exports = {

  options: {
    roundingPrecision: 3,
    sourceMap: true
  },

  files: {
    src: '<%= paths.distCSS %>/<%= names.distCSS %>.css',
    dest: '<%= paths.distCSS %>/<%= names.distCSS %>.min.css'
  }

};
