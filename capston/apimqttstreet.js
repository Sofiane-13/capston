var Arrow = require('arrow');

var client;

module.exports.mqttInit = function() {
	var mqtt = require('mqtt');
	var mqtturl = 'mqtt://senfdtah:QFMngZSY4SL1@m15.cloudmqtt.com:18724';
	client = mqtt.connect(mqtturl);
	
	client.on('connect', function () {
		console.log('app.js - client connected');
		client.subscribe('street/server/#');
	});
	
	client.on('message', function (topic, message) {
		console.log('app.js - message received');
		handleMessage(topic, message);
	});
};

var handleMessage = function(topic, message) {
	console.log("apibmqttstreet.js - processMessage() - topic = "+topic+" message = "+message);
    
    switch(topic) {
    	case 'street/server':
    		processMessage(message);
    		break;
    	
    	// case 'myhome/server/will':
    	// 	processLWTMessage(message);
    	// 	break;
    	
    	default: unhandledTopic(topic, message);
    }
};

var unhandledTopic = function(topic, message) {
	console.log('apibmqttstreet.js - unhandledTopic() - Unhandled Topic: '+topic);
};

var getStreet = function(streetId, callback) {
	console.log("apibmqttstreet.js - getStreet() - streetId = "+streetId);
	
	var model = Arrow.getModel("street");
    model.query({streetId: streetId}, function(err, data){
  		if(err) {
  			console.log('apibmqttstreet.js - getStreet() - error accessing iot street database, err = '+err);
  			if(callback) {callback(null)};
  		} else {
  			console.log('apibmqttstreet.js - getstreet() - data.length = '+data.length);
  			console.log('apibmqttstreet.js - getstreet() - data = '+JSON.stringify(data));
  			if(callback) {callback(data)};
  		}
  	});
};

// var processLWTMessage = function(message){
// 	console.log("apibmqttstreet.js - processLWTMessage() - message = "+message);
	
// 	getStreet(message.toString(), function(data){
// 		if(data) {
// 			if(data.length === 1) {
// 				data[0].isConnected = false;
// 				data[0].update();
// 			} else {
// 				console.log('apibmqttstreet.js - processLWTMessage() - error with iot street, exactly 1 street not found');
// 			}
// 		} else {
// 			console.log('apibmqttstreet.js - processLWTMessage() - error getting iot street');
// 		}
// 	});
// };

var processMessage = function(message, callback) {
	console.log("apibmqttstreet.js - processMessage() - message = "+message);
	
	message = JSON.parse(message);
	
	getStreet(message.streetId, function(data){
		if(data) {
			console.log('apibmqttstreet.js - processMessage() - data.length = '+data.length);
  			console.log('apibmqttstreet.js - processMessage() - data = '+JSON.stringify(data));
			if(data.length > 1) {
  				console.log('apibmqttstreet.js - processMessage() - Number of matching records greater than 1. Multiple streets with same streetId present in street DB');
  			} else {
  				if(data.length === 1) {
  					console.log('apibmqttstreet.js - processMessage() - Number of matching records equals to 1');
			        data[0].isConnected = true;
                    data[0].north = message.north.toString();
			        data[0].est = message.est.toString();
			        data[0].ouest = message.ouest.toString();
                    data[0].sud = message.sud.toString();
			        data[0].date = message.date.toString();
                    
                    
			        data[0].update();
			        console.log('apibmqttstreet.js - processMessage() - Record updated!!!');
  				} else {
  					console.log('apibmqttstreet.js - processMessage() - No matching records found, create new street record');
  				}
  			}
		} else {
			console.log('apibmqttstreet.js - processMessage() - error getting iot street');
		}
	});
};