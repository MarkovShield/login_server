const constants = require('../services/markov-constants.js');
const fs = require('fs');
const forge = require('node-forge');
const pki = forge.pki;

function issueServerCertificate(ca, callback) {
  "use strict";
  pki.rsa.generateKeyPair({bits: 4096, e: 0x10001}, function (err, keypair) {
    "use strict";
    if (err) {
      throw("Key generation error");
    }
    const cert = pki.createCertificate();
    const key = keypair;

    cert.publicKey = key.publicKey;
    cert.serialNumber = '010204' + (new Date()).getTime();
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 2);

    cert.setSubject(constants.serverAttributes);
    cert.setIssuer(constants.issuerAttributes);

    cert.setExtensions(constants.defaultExtensions.concat({
      name: 'subjectAltName',
      altNames: [{
        type: 2,
        value: 'localhost'
      }]
    }));

    cert.sign(ca.key, forge.md.sha256.create());

    const servercert = pki.certificateToPem(cert);
    const serverkey = pki.privateKeyToPem(key.privateKey);

    callback({cert: servercert, key: serverkey});

  });
}


issueServerCertificate({key: pki.privateKeyFromPem(fs.readFileSync('./ca.key'))}, function (caobj) {
  "use strict";
  fs.writeFile('./server.pem', caobj.cert, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Server cert was saved")
    }
  });

  fs.writeFile('./server.key', caobj.key, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Server key was saved")
    }
  });
});