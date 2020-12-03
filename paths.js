const { PRODUCTION } = require('./config');
const base = PRODUCTION ? 'dist' : 'public';
const assets = base + (PRODUCTION ? '' : '/assets');
const js = PRODUCTION ? base : assets + '/js';

module.exports = {
	build: {
		html: base + '/',
		assets: assets + '/',
		scripts: assets + '/js/',
		styles: assets + '/css/',
	},
	src: {
		scripts: './src/js/index.ts',
		styles: ['./src/css/*.scss', '!./src/css/_*.scss'], 
		tests: './src/test/index.ts',
		templates: './src/templates/',
		nunj: 'src/templates/*.nunj',
	},
	watch: {
		nunj: 'src/templates/**/*.nunj',
		styles: 'src/css/**/*.scss', 
		scripts: 'src/js/**/*.ts',
	},
	clean: base + '/*',
	deploy: '../web/boards/',
};
