/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {

      // List of supported browsers. Uses caniuse.com database.
      // @see https://github.com/ai/browserslist
      browsers: [
        'last 10 versions',
        'ie 7',
        'ie 8',
      ],

      // Filenames.
      names: {
        distCSS: 'app',
        distJS: 'app',
      },

      // Path references.
      paths: {
        distRoot: 'dist',
        distCSS: '<%= paths.distRoot %>/css',
        distJS: '<%= paths.distRoot %>/js',

        srcRoot: 'src',
        srcSASS: '<%= paths.srcRoot %>/sass',
        srcLESS: '<%= paths.srcRoot %>/less',
        srcJS: '<%= paths.srcRoot %>/scripts',
        srcVendor: '<%= paths.srcRoot %>/vendor',

        img: '<%= paths.distRoot %>/img'
      },

      // Banner for uncompressed output.
      banner: [
        '/*!',
        ' * <%= package.title %> v<%= package.version %> <%= package.homepage ? "(" + package.homepage + ")" : "" %>',
        ' * Copyright (c) <%= grunt.template.today("yyyy") %>, <%= package.author %>',
        ' * Licensed under <%= package.license %>',
        ' */\n'
      ].join('\n')
    }
  });
};
