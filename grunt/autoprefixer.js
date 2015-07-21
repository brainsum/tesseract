/**
 * grunt-contrib-autoprefixer
 * @see https://github.com/nDmitry/grunt-autoprefixer
 */

module.exports = {

  options: {
    browsers: ['last 2 versions', 'ie 8', 'ie 9'],
    diff: false // Set it to true if you want to get an output patch file
  },
  dist: {
    expand: true,
    flatten: true,
    src: 'css/style.css',
    dest: 'css/.'
  }

};
