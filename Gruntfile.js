module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './spa-home2.html',
          dest: './spa-home2.min.html'
        }
      },
      cssmin: {  
        'baidu.min.css': 'baidu.css'
      },
      uglify: {
        release:{
          files: {
            'baidu.min.js': 'baidu.js'
          }
        }       
      }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['htmlmin','cssmin','uglify:release']); 
  };