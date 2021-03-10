FROM node:14.16.0-alpine3.10

EXPOSE 8080
EXPOSE 443

WORKDIR /app

RUN apk update && apk add git && chown node:node /app

USER node
##ENV NODE_ENV production
RUN git clone https://github.com/kchinchillam98/CarHistoryApp.git && cd CarHistoryApp && \ 
    npm install && npm run build

CMD ["node", "/app/CarHistoryApp/dist/server.js"]
