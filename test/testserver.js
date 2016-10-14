var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();

chai.use(chaiHttp);

describe('Application gateway', function() {
		
	it('Should render the index page on /home', function(done) {	

		//setTimeout(done, 15000);


		this.timeout(15000);
		chai.request(server)
			.get('/home')
			.end(function(err, res){
			  res.should.have.status(200);
			  done();
		});
	});

	it('Should submit date on /home/submit', function(done) {

		//setTimeout(done, 15000);
		this.timeout(15000);
    			
		chai.request(server)
			.post('/home/submit')
			.send({date: "2000/01/21"})
			.end(function(err, res){
			  res.should.have.status(200);
			  done();
		});
	});
});
