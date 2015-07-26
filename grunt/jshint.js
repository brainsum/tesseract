/**
 * grunt-contrib-jshint
 * @see
 *
 * @todo  stuff
 */

module.exports = {

  options: {
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    unused: true,
    boss: true,
    eqnull: true,
    browser: true,
    globals: {},
  },
  gruntfile: {
    src: ['Gruntfile.js', 'js/app.js']
  },
  test: {
    src: ['lib/**/*.js', 'test/**/*.js']
  }

};
