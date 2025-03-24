FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./backend ./backend

WORKDIR /app/backend

EXPOSE 3000

CMD ["npm", "start"]
