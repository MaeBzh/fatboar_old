FROM node:14.16

RUN mkdir -p /app/fatboar/fatboar-concours

WORKDIR /app/fatboar/fatboar-concours

ENV PATH /app/node_modules/.bin:$PATH

COPY ./fatboar-concours .

RUN npm install -g @angular/cli@7.3.9 && npm install

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --disable-host-check