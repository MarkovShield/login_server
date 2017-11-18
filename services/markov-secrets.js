const fs = require('fs');
const pki = require('node-forge').pki;

const cacertpem = fs.readFileSync('./config/ca.pem').toString('utf8');

const servercert = {
    cert: fs.readFileSync('./config/server.pem'),
    key: fs.readFileSync('./config/server.key'),
    ca: cacertpem
};

module.exports = { servercert };