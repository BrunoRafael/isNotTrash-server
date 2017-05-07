var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var cloudinary = require('cloudinary');
var WebSocket = require('../api/resources/web_socket/WebSocket.js');

var app = module.exports = express();

var server = require('http').createServer(app);
var io = WebSocket.io;

/*Serviço rodando na porta 1337*/
var ip = process.env.IP || 'localhost';
var port = process.env.PORT || 1337;

server.listen(port, () => {
	console.log('App is running on http://' + ip + ':' + port);
});

io.attach(server);

app.use(cors());

if (process.env.NODE_ENV === 'dev') {
	app.use(logger('dev'));
}

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}));

cloudinary.config({
	cloud_name: 'hy1uaykrf',
	api_key: '171589611641968',
	api_secret: 'HyPFcyKPXN408-Th8EaaHHNufSw'
});