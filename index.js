var fs = require('fs');
var gm = require('gm');
var $ = require('jquery');



fs.readdir( 'images/', function (err, files) { 
	if (!err) {
		for(var i=0; i < files.length; i++) {
			var file = files[i];
			if(file.indexOf('.jpg') != -1) {
				console.log(file);
				// gm('images/' + file)
				// .thumb(240, 240, 'images/sm/' + file, 10, function() {
				// 	console.log('done')
				// })
				// .write('images/sm/' + file, function (err) {
				//   if (!err) console.log('done Small');
				// });

				var size = {width: 200, height: 200};
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


// gm('images/ing.jpg')
// .resize(240, 240)
// .write('images/sm/ing.jpg', function (err) {
//   if (!err) console.log('done Small');
// });

// gm('images/ing.jpg')
// .resize(1000, 1000)
// .write('images/lg/ing.jpg', function (err) {
//   if (!err) console.log('done Large');
// });