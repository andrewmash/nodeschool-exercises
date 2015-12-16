var fs = require("fs");
fs.readFile(process.argv[2], "utf8", function (err, data) {
	if (err) {
		console.error("File not found");
	} else {
		var arr = data.split("\n");
		console.log(arr.length - 1);
	}
});
