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



module.exports.multipart = function *() {
    console.log('INFO: Reached multipart endpoint...');

    if ( sleepMode == true ){
      //Sleep for a random amount of time to simulate a slow response
      var sleepTime = Math.floor(Math.random() * (max - min + 1) + min);
      yield sleep(sleepTime);
    }

    this.body = '--yolo\n'+
'Content-Disposition: form-data; name="1111111111"; filename="1111111111.json"\n'+
'Content-Type: application/json\n'+
'\n'+
'{"documentEntry":{"patientId":"1111111111^^^ZAF^NI","uniqueId":"1111111111","entryUUID":"urn:uuid:1111111111","classCode":{"code":"1111111111","codingScheme":"1111111111","codeName":"1111111111"},"typeCode":{"code":"1111111111","codingScheme":"1111111111","codeName":"1111111111"},"formatCode":{"code":"1111111111","codingScheme":"1111111111","codeName":"1111111111"},"mimeType":"text/xml","hash":"7329baac96cf165b9d62ce9cace82acdff22f44e","size":5551}}\n'+
'\n'+
'--yolo\n'+
'Content-Disposition: form-data; name="content"; filename="1111111111.xml"\n'+
'Content-Type: text/xml\n'+
'\n'+
'<?xml version="1.0" encoding="UTF-8"?>\n'+
'<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:cda="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:pcc="urn:ihe:pcc:hl7v3" xmlns:lab="urn:oid:1.3.6.1.4.1.19376.1.3.2" xmlns:sdtc="urn:hl7-org:sdtc" xsi:schemaLocation="urn:hl7-org:v3 CDA.xsd">\n'+
'<typeId root="1111111111" extension="1111111111"/>\n'+
'<templateId root="1111111111" extension="1111111111"/>\n'+
'<id root="1111111111"/>\n'+
'<code code="1111111111" codeSystem="1111111111" codeSystemName="1111111111"/>\n'+
'<title>1111111111</title>\n'+
'<!-- Creation time of document, e.g. 1111111111 -->\n'+
'<effectiveTime value="1111111111"/>\n'+
'<confidentialityCode code="1111111111" displayName="1111111111" codeSystem="1111111111" codeSystemName="1111111111"/>\n'+
'<languageCode code="1111111111"/>\n'+
'<custodian>\n'+
'  <assignedCustodian>\n'+
'    <representedCustodianOrganization>\n'+
'      <id root="1111111111"/>\n'+
'      <name>1111111111</name>\n'+
'    </representedCustodianOrganization>\n'+
'  </assignedCustodian>\n'+
'</custodian>\n'+
'<documentationOf>\n'+
'  <serviceEvent classCode="1111111111">\n'+
'    <effectiveTime value="1111111111"/>\n'+
'  </serviceEvent>\n'+
'</documentationOf>\n'+
'</ClinicalDocument>';

    this.type = 'multipart/form-data';
    this.status = 200;
}