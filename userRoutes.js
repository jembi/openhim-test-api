var parse = require("co-body");
var monk = require("monk");
var wrap = require("co-monk");
var sleep = require('co-sleep');

//Set you max and min timeouts
var sleepMode = true; // 'true' to enable sleepMode and 'false' to disable it
var max = 1000;
var min = 100;


module.exports.add = function * () {
  console.log('INFO: Reached POST endpoint...');

  var postData = yield parse(this);

  if ( sleepMode == true ){
    //Sleep for a random amount of time to simulate a slow response
    var sleepTime = Math.floor(Math.random() * (max - min + 1) + min);
    yield sleep(sleepTime);
  }  

	this.body = 'The POST has been successfull and return POST data';
	this.status = 201;
}

module.exports.get = function *() {
    console.log('INFO: Reached GET endpoint...');

    if ( sleepMode == true ){
      //Sleep for a random amount of time to simulate a slow response
      var sleepTime = Math.floor(Math.random() * (max - min + 1) + min);
      yield sleep(sleepTime);
    }

    this.body = 'The GET has been successfull and return GET data';
    this.status = 200;
}

module.exports.getNoDelay = function *() {
    console.log('INFO: Reached GET No Delay endpoint...');

    this.body = 'The GET No Delay has been successfull and return GET No Delay data';
    this.status = 200;
}

module.exports.getFailing = function *() {
    console.log('INFO: Reached GET Failing endpoint...');

    if ( sleepMode == true ){
      //Sleep for a random amount of time to simulate a slow response
      var sleepTime = Math.floor(Math.random() * (max - min + 1) + min);
      yield sleep(sleepTime);
    }

    this.body = 'Internal Server Error';
    this.status = 500;
}