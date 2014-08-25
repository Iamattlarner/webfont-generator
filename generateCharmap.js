var fs = require('fs'),
	glob = require('glob'),
	util = require('util'),
	jsonFormat = require('json-format'),
	merge = require('merge');

function generateCharMap(fontDetails, inputDir) {
	var charmap = [];
	glob(path.join(inputDir, '*.svg'), null, function(error, files) {
		for (i=0; i< files.length; i++) {
			charmap.push({"unicode" : String.fromCharCode(i+197), "file": files[i]});
		}

		var config = merge(JSON.parse(fontDetails), {charmap: charmap})
		fs.writeFile(path.join(inputDir, '/', 'config.json'), jsonFormat(config), function(error) {
			console.log(error || 'done.');
		})
	});
};

module.exports = generateCharMap;
