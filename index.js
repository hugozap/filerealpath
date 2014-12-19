var fs = require('fs');
var path = require('path');

var argpath = process.argv[2];

if(typeof argpath === 'undefined'){
	process.stdout.write('usage: filerealpath relativePath');
	process.exit(1);
}
else{
	process.stdout.write(path.resolve('.',argpath))
	process.exit(0);
}
