FROM node:9.2.0

LABEL maintainer="dev@markovshield.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

WORKDIR /usr/src/app/config
RUN node genca.js 
RUN node genserver.js
WORKDIR /usr/src/app

RUN groupadd -r markov && useradd --no-log-init -r -g markov markov
RUN chown markov:markov -R /usr/src/app
USER markov

EXPOSE 8080
CMD [ "npm", "start" ]