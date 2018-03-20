var express = require('express')
var path = require('path');
var app = express()
var catalog = 'static'; 
var catalog2 = 'node_module'; 
app.use('/', express.static(path.join(__dirname ,catalog)));

app.get('/', function(req, res){    
    res.sendFile(path.join(__dirname, catalog, 'index.html'));
});
 
app.listen(3000)