FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 4200

CMD ["npx", "http-server", "dist/pokemon-frontend", "-p", "4200"]
