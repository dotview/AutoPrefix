/**
 * @overview formatHtml is a JS tool that auto format html content.
 *
 * @author Min
 * @version 0.0.1
 */
'use strict';

var fs = require('fs');

var formatHtml = function(input, output) {
	input = input || 'input.html';
	output = output || 'output.html';
 
	var line = [],
		lineCount = 0,
		byteCount = 0,
		rr = fs.createReadStream(input),
		writer = fs.createWriteStream(output);

	rr.setEncoding('utf8');
	rr.on('data', function(data) {

		for (var i = 0; i < data.length; i++) {
			if (data[i] == 10 || data[i] == 13 || data[i] == '\n') { // Newline char was found.

				lineCount++;
				if (line.length) {
					//console.log(line, lineCount, byteCount);

					var _nl = 'html+=\'' + line.join('') + '\';\n';
					_nl = _nl.replace(/\r/ig, '');
					console.log(lineCount, _nl);

					writer.write(_nl);
				}

				line = []; // Empty buffer.

			} else {
				line.push(data[i]); // Buffer new line data.
			}

			byteCount++;

		}
	});

	rr.on('end', function() {
		console.log('read end');
	});


	writer.on('finish', function() {
		console.log('end write')
	});
}

exports = module.exports = formatHtml;


//autorun
formatHtml();