const fs = require("fs");

function read(file, callback)
{
	var src = fs.createReadStream(file);
	var data = "";
	src.on('data', function(d) {
		data += d;
	});
	src.on('end', function(d) {
		callback(null, data.toString().trim());
	});
}

function getBranch(callback)
{
	read(".git/HEAD", function(err, file) {
		var head = file.split(":")[1].trim();
		callback(null, head);
	});
}

function getCommit(branch, callback)
{
	read(".git/" + branch, callback);
}

function getVersion(callback)
{
	getBranch(function(err, branch) {
		getCommit(branch, function(err, commit){
			callback(branch.split("/")[2] + "@" + commit);
		});
	});
}

module.exports = getVersion;