var Client = require('node-rest-client').Client;

var client = new Client();

var cusdata;

var apiKeyValidator = require ('api-key-validator');

var keys = {
	q: 'chicken',
	app_id: '974027a4', 
	app_key: '8127063beff5392ee457e8e1977c7edc',
	from: '0',
	to:'3',
	calories: 'gte%20591,%20lte%20722',
	health: 'alcohol-free',
}

var sendString = "https://api.edamam.com/search?";
sendString += "q=";
sendString += keys.q;
sendString += "&app_id=";
sendString += keys.app_id;
sendString += "&app_key=";
sendString += keys.app_key;
sendString += "&from=";
sendString += keys.from;
sendString += "&to=";
sendString += keys.to;
sendString += "&calories=";
sendString += keys.calories;
sendString += "&health=";
sendString += keys.health;

apiKeyValidator.validate("sendgrid", keys, function (err, result) {
	console.log(err,result);
});


// direct way 
client.get(sendString, keys, function (data, response) {
    // parsed response body as js object 
    // console.log(data);
    // raw response 
    // console.log(response);
    if(Buffer.isBuffer(data)) {
    	data = data.toString('utf8');
    }  

    cusdata = data;
    console.log(cusdata);  
}); 

// JSON.parse(cusdata);
console.log(cusdata);

//https://api.edamam.com/search?q=chicken&app_id=${974027a4}&app_key=${8127063beff5392ee457e8e1977c7edc}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"
//https://api.edamam.com/search?q=chicken&app_id=${974027a4}&app_key=${8127063beff5392ee457e8e1977c7edc}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free



