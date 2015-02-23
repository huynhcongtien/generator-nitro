var fs = require('fs'),
	path = require('path'),
	hbs = require('hbs'),
	cfg = require('./config'),
	coreHelpersDir = cfg.sentinel.base_path + 'app/helpers/',
	projectHelpersDir = cfg.sentinel.base_path + 'project/helpers/';

hbs.registerPartials(cfg.sentinel.base_path + cfg.sentinel.view_partials_directory);

var files = {},
	coreFiles = fs.readdirSync(coreHelpersDir),
	projectFiles = fs.readdirSync(projectHelpersDir);

coreFiles.map(function(file) {
	if ('.js' === path.extname(file)) {
		files[path.basename(file, '.js')] = coreHelpersDir + file;
	}
});

projectFiles.map(function(file) {
	if ('.js' === path.extname(file)) {
		files[path.basename(file, '.js')] = projectFiles + file;
	}
});

for (var key in files) {
	if (files.hasOwnProperty(key)) {
		hbs.registerHelper(key, require(files[key]));
	}
}

module.exports = hbs;