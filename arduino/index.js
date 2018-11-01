var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://senfdtah:QFMngZSY4SL1@m15.cloudmqtt.com:18724');
client.on('connect', function () {
	console.log('client connected');
    client.publish('myhome', 'Hello from publisher');
	});