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



module.exports.nowhere = function *() {
    console.log('INFO: Reached Nowhere endpoint...');

    if ( sleepMode == true ){
      //Sleep for a random amount of time to simulate a slow response
      var sleepTime = Math.floor(Math.random() * (max - min + 1) + min);
      yield sleep(sleepTime);
    }
    
    /*this.body = '--------------------------8b1c1464dcddd238\n'+
'Content-Disposition: form-data; name="11111"; filename="111111.json"\n'+
'Content-Type: application/json\n'+
'\n'+
'{\n'+
'  "documentEntry": {\n'+
'    "patientId": "1111111",\n'+
'    "uniqueId": "1111111",\n'+
'    "entryUUID": "urn:uuid:111111111",\n'+
'    "classCode": { "code": "51855-5", "codingScheme": "2.16.840.1.113883.6.1", "codeName": "Patient Note" },\n'+
'    "typeCode": { "code": "51855-5", "codingScheme": "2.16.840.1.113883.6.1", "codeName": "Patient Note" },\n'+
'    "formatCode": { "code": "npr-pn-cda", "codingScheme": "4308822c-d4de-49db-9bb8-275394ee971d", "codeName": "NPR Patient Note CDA" },\n'+
'    "mimeType": "text/xml",\n'+
'    "hash": "5323785dfbed14bffeaf87daa785b974f426809a",\n'+
'    "size": "4756"\n'+
'  }\n'+
'}\n'+
'\n'+
'--------------------------8b1c1464dcddd238\n'+
'Content-Disposition: form-data; name="content"; filename="CDARequest.xml"\n'+
'Content-Type: text/xml\n'+
'\n'+
'<?xml version="1.0"?>\n'+
'<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:cda="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:pcc="urn:ihe:pcc:hl7v3" xmlns:lab="urn:oid:1.3.6.1.4.1.19376.1.3.2" xmlns:sdtc="urn:hl7-org:sdtc" xsi:schemaLocation="urn:hl7-org:v3 CDA.xsd">\n'+
'<typeId root="1111111" extension="1111111"/>\n'+
'<templateId root="1111111" extension="11111111"/>\n'+
'<id root="111111111"/>\n'+
'<code code="11111" codeSystem="111111" codeSystemName="111111"/>\n'+
'<title>Jembi</title>\n'+
'<!-- Creation time of document, e.g. 111111 -->\n'+
'<effectiveTime value="111111"/>\n'+
'<confidentialityCode code="11111" displayName="1111" codeSystem="11111" codeSystemName="11111"/>\n'+
'<languageCode code="en-UK"/>\n'+
'<custodian>\n'+
'  <assignedCustodian>\n'+
'  <representedCustodianOrganization>\n'+
'    <id root="1111"/>\n'+
'    <name>Jembi</name>\n'+
'  </representedCustodianOrganization>\n'+
'  </assignedCustodian>\n'+
'</custodian>\n'+
'<documentationOf>\n'+
'  <serviceEvent classCode="11111">\n'+
'  <effectiveTime value="11111111"/>\n'+
'  </serviceEvent>\n'+
'</documentationOf>\n'+
'</ClinicalDocument>\n'+
'\n'+
'--------------------------8b1c1464dcddd238--';*/


    this.body = '--yolo\n'+
'Content-Disposition: form-data; name="ihe-mhd-metadata"; filename="MHDMetadata.json"\n'+
'Content-Type: application/json\n'+
'\n'+
'{"documentEntry":{"patientId":"8803220753080^^^ZAF^NI","uniqueId":"2.25.267013625199471","entryUUID":"urn:uuid:90db2846-9d00-42de-363b-c91afc032a33","classCode":{"code":"51855-5","codingScheme":"2.16.840.1.113883.6.1","codeName":"Patient Note"},"typeCode":{"code":"51855-5","codingScheme":"2.16.840.1.113883.6.1","codeName":"Patient Note"},"formatCode":{"code":"npr-pn-cda","codingScheme":"4308822c-d4de-49db-9bb8-275394ee971d","codeName":"NPR Patient Note CDA"},"mimeType":"text/xml","hash":"7329baac96cf165b9d62ce9cace82acdff22f44e","size":5551}}\n'+
'\n'+
'--yolo\n'+
'Content-Disposition: form-data; name="content"; filename="CDARequest.xml"\n'+
'Content-Type: text/xml\n'+
'\n'+
'<?xml version="1.0" encoding="UTF-8"?>\n'+
'<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:cda="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:pcc="urn:ihe:pcc:hl7v3" xmlns:lab="urn:oid:1.3.6.1.4.1.19376.1.3.2" xmlns:sdtc="urn:hl7-org:sdtc" xsi:schemaLocation="urn:hl7-org:v3 CDA.xsd">\n'+
'<typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>\n'+
'<templateId root="2.16.840.1.113883.10" extension="IMPL_CDAR2_LEVEL1"/>\n'+
'<id root="12819a44-4e9c-4217-037e-b7018d767513"/>\n'+
'<code code="51855-5" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"/>\n'+
'<title>SA National Pregnancy Register - Patient Note</title>\n'+
'<!-- Creation time of document, e.g. 20140217121212 -->\n'+
'<effectiveTime value="20141007064419"/>\n'+
'<confidentialityCode code="N" displayName="Normal" codeSystem="2.16.840.1.113883.5.25" codeSystemName="Confidentiality"/>\n'+
'<languageCode code="en-UK"/>\n'+
'<custodian>\n'+
'  <assignedCustodian>\n'+
'    <representedCustodianOrganization>\n'+
'      <id root="a5881e6c-b42e-4559-a1fd-d1dc52379658"/>\n'+
'      <name>SA National Department of Health</name>\n'+
'    </representedCustodianOrganization>\n'+
'  </assignedCustodian>\n'+
'</custodian>\n'+
'<documentationOf>\n'+
'  <serviceEvent classCode="PCPR">\n'+
'    <effectiveTime value="20141007064419"/>\n'+
'  </serviceEvent>\n'+
'</documentationOf>\n'+
'</ClinicalDocument>';

    this.type = 'multipart/form-data';
    this.status = 200;
}