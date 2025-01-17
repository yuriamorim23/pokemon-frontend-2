FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g http-server

COPY . .
RUN npm run build

EXPOSE 4200

CMD ["http-server", "dist/pokemon-frontend/browser", "-p", "4200"]
