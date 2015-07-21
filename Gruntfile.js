/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    /**
     * grunt-contrib-concat
     * @see
     */
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/scripts/scripts.js'],
        dest: 'js/scripts.js'
      }
    },

    /**
     * grunt-contrib-uglify
     * @see
     */
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'js/scripts.min.js'
      }
    },

    /**
     * grunt-contrib-jshint
     * @see
     */
    jshint: {
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
        src: ['Gruntfile.js', 'js/scripts.js']
      },
      test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },

    /**
     * grunt-contrib-watch
     * @see
     */
    watch: {

      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },

      css: {
        files: '<%= css.lib_test.src %>',
        tasks: ['default']
      }
    },

    /**
     * grunt-contrib-autoprefixer
     * @see https://github.com/nDmitry/grunt-autoprefixer
     */
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        diff: false // Set it to true if you want to get an output patch file
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },

  });

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};
