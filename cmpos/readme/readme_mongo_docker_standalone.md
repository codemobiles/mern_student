# mongo on docker hub

- https://hub.docker.com/_/mongo

# Run mongo on docker container (mac)

- cd to root workshop containing both frontend and backend folder

```yml
docker run --name mongo-dev \
-v $(pwd)/mongo-dev/db:/data/db \
-v $(pwd)/dummy_db_cmpos:/script \
-p 27018:27017 -d mongo
```

# Run mongo on docker container (win)

```yml
docker run --name mongo-dev ^
-v "%cd%/mongo-dev/db":/data/db ^
-v "%cd%/dummy_db_cmpos":/script ^
-p 27018:27017 -d mongo
```

# shell with mongosh

- mongosh --port 27018

# start/stop mongo on homebrew

- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- brew services start mongodb-community@6.0
- brew services stop mongodb-community@6.0

# Mongo shell

- docker exec -it mongo-dev sh

# restore summary database

- mongorestore --port 27018 -d demopos .../dummy_db_cmpos
- mongosh --port 27018
