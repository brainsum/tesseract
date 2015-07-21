/**
 * grunt-sass
 * @see https://github.com/sindresorhus/grunt-sass
 */

module.exports = {

  options: {
    sourceMap: true
  },
  files: {
    'css/style.css': 'src/sass/style.sass'
  }

};
