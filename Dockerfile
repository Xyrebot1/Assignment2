FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY server.js ./
COPY pages pages

EXPOSE 8080

CMD ["/bin/bash"]
