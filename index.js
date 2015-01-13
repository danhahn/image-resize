var fs = require('fs');
var gm = require('gm');
var mkdirp = require('mkdirp');

var path = 'images/';
var size = {width: 200, height: 200};

fs.readdir( path, function (err, files) { 
	if (!err) {

		if (!fs.existsSync(path + 'lg/')) {
		    // Do something
			mkdirp('images/lg', function (err) {
			    if (err) console.error(err)
			    else console.log('pow! lg')
			});
		}

		if (!fs.existsSync(path + 'sm/')) {
		    // Do something
			mkdirp('images/sm', function (err) {
			    if (err) console.error(err)
			    else console.log('pow! sm')
			});
		}

		
		for(var i=0; i < files.length; i++) {
			var file = files[i];
			if(file.indexOf('.jpg') != -1) {
				console.log(file);				
				
				gm('images/' + file)
				.resize(size.width, size.height + "^>")
				.gravity('Center')
				.crop(size.width, size.height)
				.write('images/sm/' + file, function (error) {
					if (!err) console.log('done Small');
					if (error) console.log('Error - ', error);
				});

				gm('images/' + file)
				.resize(1200, 1200)
				.write('images/lg/' + file, function (err) {
				  if (!err) console.log('done Large');
				});
			}
		}	
	}
	else {
		throw err; 
	}
		
});
console.log("Fired callback.");
