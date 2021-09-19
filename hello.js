//hello git 
var http = require('http'); // Import Node.js core module
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('select * from sys.DEMO', function(err, result, fields){    
    if(err) throw err;  
    console.log(result);          
});

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content 
        res.write('<html><body><p>Hello World</p></body></html>');   
        res.end();
    }
    else
        res.end('Invalid Request! Please enter valid URL...');
});

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.js web server at port 8000 is running..')