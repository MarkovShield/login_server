# Development

## Content
* [Running OpenLDAP](#running-openldap)
    * [Docker network](#docker-network)
    * [Start LDAP instance](#start-ldap-instance)
    * [Manage LDAP](#manage-ldap)

## Running OpenLDAP
In order to test the LDAP connection in an easy way, the docker image [osixia/openldap](https://hub.docker.com/r/osixia/openldap/) can be used.

### Docker network
Create separate docker network (required for the auto service discovery):
```bash
docker network create net-markovshield-ldap
```

### Start LDAP instance
#### Linux/macOS
```bash
docker run -d -p 389:389 \ 
--hostname ldap-markovshield \
--name ldap-markovshield \
--network net-markovshield-ldap \
--env LDAP_ORGANISATION="MarkovShield Development LDAP" \
--env LDAP_DOMAIN="markovshield.com" \
--env LDAP_ADMIN_PASSWORD="myadminpassword" \
--env LDAP_READONLY_USER="true" \
--env LDAP_READONLY_USER_USERNAME="svc_markov" \
--env LDAP_READONLY_USER_PASSWORD="mypassword" \
--env LDAP_TLS=false \
osixia/openldap:1.1.10
```
#### Windows
```bash
docker run -d -p 389:389 --hostname ldap-markovshield --name ldap-markovshield --network net-markovshield-ldap --env LDAP_ORGANISATION="MarkovShield Development LDAP" --env LDAP_DOMAIN="markovshield.com" --env LDAP_ADMIN_PASSWORD="myadminpassword" --env LDAP_READONLY_USER="true" --env LDAP_READONLY_USER_USERNAME="svc_markov" --env LDAP_READONLY_USER_PASSWORD="mypassword" --env LDAP_TLS=false osixia/openldap:1.1.10
```

### Manage LDAP via phpldapadmin
#### Linux/macOS
```bash
docker run -d -p 6443:443 \
--hostname phpldapadmin-markovshield \
--name phpldapadmin-markovshield \
--network net-markovshield-ldap \
--env PHPLDAPADMIN_HTTPS=true \
--env PHPLDAPADMIN_LDAP_HOSTS=ldap-markovshield \
osixia/phpldapadmin:0.7.0
```

#### Windows
```bash
docker run -d -p 6443:443 --hostname phpldapadmin-markovshield --name phpldapadmin-markovshield --network net-markovshield-ldap --env PHPLDAPADMIN_HTTPS=true --env PHPLDAPADMIN_LDAP_HOSTS=ldap-markovshield osixia/phpldapadmin:0.7.0
```

### Manage LDAP
Access the phpldap admin: [https://localhost:6443](https://localhost:6443)

Login with the following credentials:

**Login DN:** `cn=svc_markov,dc=markovshield,dc=com`
**Password:** `mypassword`

Alternatively its also possible to login via the `admin` user (password was set via `LDAP_ADMIN_PASSWORD`).