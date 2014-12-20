var test = require('tape');
var getAbsolutePath = require('../getAbsolutePath.js');
var fs = require('fs');

test('relative to absolute test',function(t){
	t.plan(2);
	t.ok(fs.existsSync(getAbsolutePath('./tests/sample.txt')),"basic test");
	t.ok(fs.existsSync(getAbsolutePath('tests/sample.txt')),"basic test");
});