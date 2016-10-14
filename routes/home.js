var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/blobs', findAllBlobs);


function findAllBlobs(req, res) {
	console.log("Mocha coming here...");
	//res.json({"status": 200});
}

/* GET users listing. */
router.get('/', renderIndexPage);


function renderIndexPage(req, res, next) {
	var index_page = path.join(__dirname, '../src/www/index.html');
	console.log(index_page);
	res.sendFile(index_page);
}




/* GET users listing. */
router.post('/submit', submitDate);
	
function submitDate(req, res, next) {
	console.log("Coming here..");
	res.send("Calling submit successfully");
}



module.exports = router;
