FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build --configuration=production

FROM node:20-alpine AS production-stage

WORKDIR /app

COPY --from=build-stage /app/dist/pokemon-frontend ./dist/pokemon-frontend

RUN npm install -g http-server

EXPOSE 4200

CMD ["http-server", "dist/pokemon-frontend/browser", "-p", "4200"]
