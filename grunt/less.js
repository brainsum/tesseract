/**
 * grunt-contrib-less
 * @see https://github.com/gruntjs/grunt-contrib-less
 */

module.exports = {

  options: {
    // paths: ['<%= paths.distCSS %>'],
    sourceMap: true
  },

  files: {
    src: '<%= paths.srcLESS %>/<%= names.distCSS %>.less',
    dest: '<%= paths.distCSS %>/<%= names.distCSS %>.css'
  }

};