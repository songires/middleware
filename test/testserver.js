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

	it('Should submit date and time on /home/submit', function(done) {

		//setTimeout(done, 15000);
		this.timeout(15000);
    			
		chai.request(server)
			.post('/home/submit')
			.send({date: "2000/01/21/"})
			.end(function(err, res){
				res.should.have.status(200);
			done();
		});
	});


	it('Should submit final location on /home/submit_loc', function(done) {

		//setTimeout(done, 15000);
		this.timeout(15000);
    			
		chai.request(server)
			.post('/home/submit_loc')
			.send({ loc: '2016/09/06/KABR/', timest: '000102' })
			.end(function(err, res){
				res.should.have.status(200);
			done();
		});
	});
});
