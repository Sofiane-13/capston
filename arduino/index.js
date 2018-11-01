var mqtt = require('mqtt');
var cloudMQTTUrl = 'mqtt://senfdtah:QFMngZSY4SL1@m15.cloudmqtt.com:18724';
//var client  = mqtt.connect('mqtt://senfdtah:QFMngZSY4SL1@m15.cloudmqtt.com:18724');
var client;
var deviceId;



// client.on('connect', function () {
// 	console.log('client connected');
//     client.publish('myhome', 'Hello from publisher');
// 	});

require('getmac').getMac(function(err, macAddress){
	if (err) throw err;
	deviceId = macAddress;
	console.log(deviceId);
	client = mqtt.connect(cloudMQTTUrl,
	{
	clientId: deviceId,
	will: {
	topic: 'street/server/will',
	payload: deviceId
	},
	keepalive: 60
	});
   
	client.on('connect', function () {
	message = JSON.stringify({
		streetId:deviceId,
		north : "jaune",
		est : "orange",
		ouest : "green",
		sud : "rose",
		date : "2018"
	});
	client.publish('street/server', message);
	});
   
	setInterval(function(){
		var datetime = new Date();
	message = JSON.stringify({
	streetId:deviceId,
	north : "jaune",
	est : "orange",
	ouest : "green",
	sud : "rose",
	date : datetime
	});
	client.publish('street/server', message);
	}, 15000);
   });