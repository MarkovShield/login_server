const issuerAttributes = [{
  name: 'commonName',
  value: 'MarkovShield test CA'
}, {
  name: 'countryName',
  value: 'CH'
}, {
  shortName: 'ST',
  value: 'St. Gallen'
}, {
  name: 'localityName',
  value: 'Rapperswil'
}, {
  name: 'organizationName',
  value: 'MarkovShield'
}, {
  shortName: 'OU',
  value: 'Development Team'
}];

const issuerExtensions = [{
  name: 'basicConstraints',
  cA: true
}, {
  name: 'keyUsage',
  keyCertSign: true,
  digitalSignature: true,
  nonRepudiation: true,
  keyEncipherment: true,
  dataEncipherment: true
}, {
  name: 'extKeyUsage',
  serverAuth: true,
  clientAuth: true,
  codeSigning: true,
  emailProtection: true,
  timeStamping: true
}, {
  name: 'nsCertType',
  client: true,
  server: true,
  email: true,
  objsign: true,
  sslCA: true,
  emailCA: true,
  objCA: true
}, {
  name: 'subjectKeyIdentifier'
}];

const serverAttributes = [{
  name: 'commonName',
  value: 'webapp.markovshield.com'
}, {
  name: 'countryName',
  value: 'CH'
}, {
  shortName: 'ST',
  value: 'St. Gallen'
}, {
  name: 'localityName',
  value: 'Rapperswil'
}, {
  name: 'organizationName',
  value: 'MarkovShield'
}];

const defaultExtensions = [{
  name: 'basicConstraints',
  cA: false
}, {
  name: 'keyUsage',
  keyCertSign: false,
  digitalSignature: true,
  nonRepudiation: true,
  keyEncipherment: true,
  dataEncipherment: true
}];

module.exports = {defaultExtensions, issuerAttributes, issuerExtensions, serverAttributes};