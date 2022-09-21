FROM node:14.16.0-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]
