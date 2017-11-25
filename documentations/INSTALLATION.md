# Installation

## Content
* [Prerequesites](#prerequesites)
    * [Certificates](#certificates)

## Prerequesites
### Certificates
In order to start the login server via https, it is required that the server's certificates are existing and stored in the right directory. For the login server to start, inside the `config/` directory there must be a `server.pem` and a `server.key` file. In non productive environments the following scripts can be used to generate a sample CA & server certificate:

```bash
cd config/
node genca.js 
node genserver.js
```
