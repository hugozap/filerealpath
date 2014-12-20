var path = require('path');

module.exports = function(relativePath){
	return path.resolve('.',relativePath);
}
