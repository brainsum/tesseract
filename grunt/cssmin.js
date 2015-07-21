/**
 * grunt-contrib-cssmin
 * @see
 */

module.exports = {

  options: {
    roundingPrecision: 3,
    sourceMap: true
  },
  dist: {
    files: {
      'css/style.css': 'css/style.css'
    }
  }

};
