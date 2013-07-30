module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'src/js/<%= pkg.name %>.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// more options here if you want to override JSHint defaults
				globals: {
					jQuery: true
				}
			}
		},
		copy: {
			main: {
				files: [
					{
						src: 'src/js/<%= pkg.name %>.js',
						dest: 'dist/js/<%= pkg.name %>.js'
					}
				]
			}
		},
		uglify: {
			options: {
				banner: '/* \n' +
					' * <%= pkg.name %> v.<%= pkg.version %>\n' +
					' * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n' + 
					' * Author: <%= pkg.author %>\n' +
					' * Site: <%= pkg.repository.url %> \n' +
					'*/\n'
			},
			build: {
				files: [{
					src: 'src/js/<%= pkg.name %>.js',
					dest: 'dist/js/<%= pkg.name %>.min.js'
				}]

			}
		},
		compass: {
			options: {
				config: 'src/compass/config.rb'
			},
			default: {
				options: {
					environment: 'development'
				}
			},
			release: {
				options: {
					environment: 'production'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'copy', 'compass:default']);
	grunt.registerTask('release', ['jshint', 'uglify', 'compass:release']);

};