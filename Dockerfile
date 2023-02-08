FROM node:19

WORKDIR /usr/src/app

COPY *.json .
COPY postmessage.js .
COPY pages/* pages

RUN npm add express
RUN npm add body-parser
RUN npm add fc

EXPOSE 8080

CMD [ "node", "server.js"]
