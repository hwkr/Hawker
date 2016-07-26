module.exports = function(grunt) {
 
  //Checks the dependencies associated with Grunt and autoloads
  //& requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
 
  // Project configuration.
  grunt.initConfig({

    // Sass configuration
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'static/css/hawker.css': 'static/css/scss/hawker.scss'
        }
      }
    },

    // Copy font awesome fonts into relative project
    copy: {
      font_awesome: {
        expand: true,
        flatten: true,
        src: ['bower_components/font-awesome/fonts/*'],
        dest: 'static/fonts'
      }
    },

    //Use PostCSS Autoprefixer to apply browser prefixes for certain styles
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({
              browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'static/css/*.css'
      }
    },

    //Watches files and folders for us
    watch: {
      files: [
        '*.html',
        'static/js/**/*.js',
        'static/css/**/*.scss',
        'static/img/**/*.{png,jpg,gif,svg}'
      ],
      tasks: [
        'build'
      ]
    }
 
  });

  //grunt serve
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['sass', 'copy', 'postcss']);
};
