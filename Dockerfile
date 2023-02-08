FROM node:19

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY server.js ./
COPY pages pages

EXPOSE 8080

CMD [ "node", "server.js"]
