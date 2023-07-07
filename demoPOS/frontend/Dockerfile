# command to build 
# docker build -t react_frontend . 
# docker run --rm -p 1152:80 --name reactfrontend react_frontend
# docker-compose up -d
FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# https://hub.docker.com/_/mongo
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable-alpine
COPY src/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/ .
