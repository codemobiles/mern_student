# start mongo first - readme_mongo_docker_standalone.md
# docker build -t react_backend .
# docker run --rm -e MONGO_HOST=172.17.0.2 -e MONGO_PORT=27017 -p 8081:8081 --name reactbackend react_backend
# docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongo-dev
# docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' reactbackend
# docker-compose up
# docker-compose up -d
# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./


# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

COPY uploaded ./build/uploaded

ENV ROOT_PATH=/usr/src/app/build 
COPY *.key ./build

# Start the server using the production build
CMD [ "node", "build/index.js" ]
