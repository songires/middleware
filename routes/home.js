var express = require('express');
var router = express.Router();
var path = require('path');
var fetch = require('node-fetch');

/* Initial index page for weather report. */
router.get('/', renderIndexPage);

/* submit date and get response from the server.. */
router.post('/submit', submitDate);

/* this submits the final location */
router.post('/submit_loc', submitLOC);



/* Initial index page for weather report. */
function renderIndexPage(req, res, next) {
	var index_page = path.join(__dirname, '../src/www/index.html');
	console.log(index_page);
	res.sendFile(index_page);
}




/* submit date and get response from the server.. */	
function submitDate(req, res, next) {
	/*var insert_data = {
	  "username" : req.sessionID,
	  "timestamp" : req.sessionID,
	  "description" : req.sessionID
	}

	db.insertDB(insert_data, function(res){
	  console.log("response received..."+res)
	});*/
	fetch('http://localhost:4000/get_loc',{method: "POST",  headers: {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
	},
		body: JSON.stringify({date: req.body.date})

	})
	.then(function(res) {
    	return res.text();

	}).then(function(body) {
		console.log("Received response from data ingestor");
		res.send(body);    
	});
}




/* submit Loacation response from the server.. */	
function submitLOC(req, res, next) {
	/*var insert_data = {
	  "username" : req.sessionID,
	  "timestamp" : req.sessionID,
	  "description" : req.sessionID
	}

	db.insertDB(insert_data, function(res){
	  console.log("response received..."+res)
	});*/

	fetch('http://localhost:4000/get_url',{method: "POST",  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
	  },
	   body: JSON.stringify({loc:req.body.loc , timest:req.body.timest})

	 })
	    .then(function(res) {
	        return res.text();

	    }).then(function(body) {
	    	console.log("Received url from data ingestor");
	    	res.send(body);
	    	console.log(res.body);
	      /*sendFinalUrl(body,req.sessionID, function(object){

	        //console.log("response from storm detector"+kml);

	        //sendFinalUrl(kml);
	        console.log(object);
	        response.send(JSON.stringify({forecast: object}));
	      });*/

        
    });

}


module.exports = router;
