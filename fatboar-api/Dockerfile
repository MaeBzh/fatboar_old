FROM node:14.16

RUN mkdir -p /app/fatboar/fatboar-api

WORKDIR /app/fatboar/fatboar-api

COPY ./fatboar-api .

RUN npm install

EXPOSE 3000

CMD npm run start