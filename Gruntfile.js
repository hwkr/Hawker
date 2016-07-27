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
      },
      jquery: {
        expand: true,
        flatten: true,
        src: ['bower_components/jquery/dist/jquery.min.js'],
        dest: 'static/js/'
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

    //Minifies Javascript
    uglify: {
      dist: {
        files: {
          'static/js/hawker.min.js': [
            'bower_components/jquery.easing/jquery.easing.js',
            'bower_components/jquery.scrollTo/jquery.scrollTo.js',
            'bower_components/jquery.fullContent/js/jquery.fullContent.js',
            'static/js/src/**/*.js'
          ]
        }
      }
    },

    //Watches files and folders for us
    watch: {
      files: [
        '*.html',
        'static/js/src/**/*.js',
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
  grunt.registerTask('build', ['sass', 'copy', 'postcss', 'uglify']);
};
