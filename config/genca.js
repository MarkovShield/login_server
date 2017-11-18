const constants = require('../services/markov-constants.js');
const fs = require('fs');
const forge = require('node-forge');
const pki = forge.pki;

function generateNewCA(callback) {
  "use strict";
  pki.rsa.generateKeyPair({bits: 4096, e: 0x10001}, function (err, keypair) {
    "use strict";
    if (err) {
      throw("Key generation error");
    }
    const cert = pki.createCertificate();
    const key = keypair;

    cert.publicKey = key.publicKey;
    cert.serialNumber = '010203' + (new Date()).getTime();
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 5);

    cert.setSubject(constants.issuerAttributes);
    cert.setIssuer(constants.issuerAttributes);
    cert.setExtensions(constants.issuerExtensions);

    cert.sign(key.privateKey, forge.md.sha256.create());

    const pemca = pki.certificateToPem(cert);
    const pemkey = pki.privateKeyToPem(key.privateKey);

    callback({ca: pemca, key: pemkey});
  });
}

generateNewCA(function (caobj) {
  "use strict";
  fs.writeFile('./ca.pem', caobj.ca,function (err) {
    if(err) {
      return console.log(err);
    } else {
      console.log("CA cert was saved")
    }
  });

  fs.writeFile('./ca.key', caobj.key,function (err) {
    if(err) {
      return console.log(err);
    } else {
      console.log("CA key was saved")
    }
  });
});