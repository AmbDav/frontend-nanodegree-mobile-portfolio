module.exports = function(grunt){

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: '180px',
						suffix: '180',
						quality: 80
					}]
				},

				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'img/'
				}]
			}
		},
	htmlmin: {                                     // Task
	    dist: {                                      // Target
	      options: {                                 // Target options
	      	removeComments: true,
	      	collapseWhitespace: true,
	      	minifyJS: true,
	      	minifyCSS: true,
	      	removeOptionalTags: true
	      },
	      files: {                                   // Dictionary of files
	        'index.html': 'html_src/index.html',     // 'destination': 'source'
	    }
	},
	    dev: {                                       // Another target
	      options: {                                 // Target options
	      	removeComments: true,
	      	collapseWhitespace: true,
	      	minifyJS: true,
	      	minifyCSS: true,
	      	removeOptionalTags: true
	      },
	      files: {
	      	'index.html': 'html_src/index.html',
	      }
	  }
	},
  	imagemin: {                          // Task
	    dist: {                         // Another target
		    options: {                       // Target options
		    	optimizationLevel: 9,
		    	svgoPlugins: [{ removeViewBox: false }],
		    },
		    files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: 'image_src',                   // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		        dest: 'img/'                  // Destination path prefix
		    }]
		}
	},

	clean: {
		dev: {
			src: ["images"],
		},
	},

	mkdir: {
		dev: {
			options: {
				create: ['img']
			}
		},
	},

	copy: {
		dev: {
			files: [{
				expand: true,
				cwd: 'images_src',
				src: '*.{gif,jpg,png}',
				dest: 'img/'
			}]
		},
	},
});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['htmlmin', 'imagemin']);
};
