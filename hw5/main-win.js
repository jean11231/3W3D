var shelljs = require('shelljs');
var express = require('express');
var app = express();

// or simply
// app.listen (1337); 
// will do


app.get ('/login', function (req, res) {
	console.log ('url:' + req.url);

	var name = req.query.name; // ("name");
	console.log (name);
		
	shelljs.exec('login.exe ' + name, function(code, stdout, stderr) {
	  console.log('Exit status:'+ code);
	  console.log('Exit output:'+ stdout);

	  var outputPackage = {
		  status: code,
		  output: stdout
	  };
	  		  
	  res.writeHead(200, {
		  "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
	  });
	  res.write(JSON.stringify (outputPackage) );
	  res.end();   
	 	
	});
});

app.get ('/writelog', function (req, res) {

	var filename = req.query.filename;
	console.log ('file: ' + filename);
	console.log (req.query);
	var data = req.query.data;  // should be an array
	
	console.log (data);

	
	var shellStr = '';
	for (var i = 0; i < data.length; i++) {
		shellStr = shellStr + data[i] + ' ';
	}
	
	console.log ('shellStr: ' + shellStr);
	
	shelljs.exec ('writeLog.exe ' + filename + ' ' + shellStr, function (code, stdout, stderr) {
	  console.log('Exit status:'+ code);
	  console.log('Exit output:'+ stdout);

	  var outputPackage = {
		  status: code,
		  output: stdout
	  };
	  		  
	  res.writeHead(200, {
		  "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
	  });
	  res.write(JSON.stringify (outputPackage) );
	  res.end();   
	 	
	});

});

app.get ('/readlog', function (req, res) {

	var filename = req.query.filename;
	console.log ('file: ' + filename);

	shelljs.exec ('readLog.exe ' + filename, function (code, stdout, stderr) {
	  console.log('Exit status:'+ code);
	  console.log('Exit output:'+ stdout);

	  var outputPackage = {
		  status: code,
		  output: stdout
	  };
	  		  
	  res.writeHead(200, {
		  "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type"
	  });
	  res.write(JSON.stringify (outputPackage) );
	  res.end();   
	 	
	});
});



var server = app.listen (1337, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log ('server started on http://' + host + ':' + port);
});
