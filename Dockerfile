FROM node:20.11.1-alpine

WORKDIR /var/www/html

COPY package.json .
COPY package-lock.json .

RUN npm install -g npm@10.6.0

COPY . .

EXPOSE 3000

CMD ["npm start"]
