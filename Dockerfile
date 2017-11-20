FROM node:9.2.0

LABEL maintainer="dev@markovshield.com"

RUN groupadd -r markov && useradd --no-log-init -r -g markov markov

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

WORKDIR /usr/src/app/config
RUN node genca.js 
RUN node genserver.js
RUN chmod 700 /usr/src/app/config
RUN chmod 600 /usr/src/app/config/*
RUN chown markov:markov -R /usr/src/app/config
WORKDIR /usr/src/app

RUN chown markov:markov -R /usr/src/app
USER markov

EXPOSE 8080
CMD [ "npm", "start" ]