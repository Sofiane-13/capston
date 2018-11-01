var Arrow = require('arrow'),
	server = new Arrow();

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://senfdtah:QFMngZSY4SL1@m15.cloudmqtt.com:18724');
client.on('connect', function () {
	console.log('client connected');
	client.subscribe('myhome');
	});
client.on('message', function (topic, message) {
	console.log('message received');
	console.log(topic," :",message.toString());
	});
// lifecycle examples
server.on('starting', function () {
	server.logger.debug('server is starting!');
});

server.on('started', function () {
	server.logger.debug('server started!');
});

// start the server
server.start();
