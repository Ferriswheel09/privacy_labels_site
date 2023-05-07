FROM node:alpine3.17

WORKDIR /privacy_backend/
COPY package*.json .
RUN npm install
COPY . .





EXPOSE 8000

CMD npm start