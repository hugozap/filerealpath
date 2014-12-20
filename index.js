#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var getAbsolutePath = require('./getAbsolutePath');
var argpath = process.argv[2];

if(typeof argpath === 'undefined'){
	process.stdout.write('usage: filerealpath relativePath');
	process.exit(1);
}
else{
	process.stdout.write(getAbsolutePath(argpath));
	process.exit(0);
}
