module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
		    templates: {
		      files: [{
		        expand: true,
		        cwd: "src",     // Parent folder of original CSS templates
		        src: '**/*.*',             // Collects all `*.css` files within the parent folder (and its subfolders)
		        dest: 'dist'            // Stores the collected `*.css` files in your `src/css/` folder
		      }]
		    }
		  }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['copy']);
}