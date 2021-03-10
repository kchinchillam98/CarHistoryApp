FROM node:14.16.0-alpine3.10

EXPOSE 80
EXPOSE 443
RUN apk update && apk add git
WORKDIR /app

RUN git clone https://github.com/kchinchillam98/CarHistoryApp.git && cd CarHistoryApp && \ 
    npm install && npm run build

CMD [ "npm", "run start" ]
