/**
 * grunt-sass
 * @see https://github.com/sindresorhus/grunt-sass
 */

module.exports = {

  options: {
    sourceMap: false,
    sourceComments: false,
    outputStyle: 'expanded'
  },
  files: {
  	src: '<%= paths.srcSASS %>/<%= names.distCSS %>.sass',
  	dest: '<%= paths.distCSS %>/<%= names.distCSS %>.css'
  }

};
