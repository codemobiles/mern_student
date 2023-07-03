https://www.youtube.com/watch?v=yMDQroitWPs

docker ps
docker build -t cmapi .  
docker run -d --name cmapp -p 8081:8081 cmapi
docker network ls
docker volume ls
docker exec -it containerId sh
docker inspect bridge (find using-container to update db network url)
docker logs <container ID>
docker logs --follow <container ID>

# Run docker node

- for windows, host path must be absolute path
- docker run --rm --name mynode -it node node
- docker run -v ./:/app --rm --name mynode -it node node /app/test.js

# docker backup volumes

- Youtube : https://youtu.be/mjh82gpnYpk
- https://www.docker.com/blog/back-up-and-share-docker-volumes-with-this-extension/
- 1st option: using docker desktop extension - Volumes Backup & Share
- 2nd option: with the following command line

```
docker volume ls
docker run --rm -v cmmongo-volume:/backup-volume -v "$(pwd)":/backup busybox tar -zcvf /backup/my-backup.tar.gz /backup-volume
```

# check container ip-address

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongo-dev

# how to ping across containers

```
docker exec --user="root" -it <container_name> /bin/bash
apt-get update -y
apt-get install -y iputils-ping
```

# in appsettings.json

"ConnectionSQLServer": "Server=172.17.0.2,1433;user id=sa; password=Mflv[Mflv[; Database=demopos;"
"ConnectionSQLServer": "Server=<docker_compose_service>,1433;user id=sa; password=Mflv[Mflv[; Database=demopos;"

# join bride network from docker-compose

# up with docker-compose (cmapp is the container name)

docker-compose -p cmapp up --build -d

# one shot

docker stop cmapp-backend-1 && docker rm cmapp-backend-1 && docker-compose -p cmapp up --build -d

---

```
## docker installation window
  Windows OS	Windows 10+
  Memory	2 GB RAM (recommended)
  Virtualization	This should be enabled.

## docker installation linux
  $ uname -a
  $ docker version
  $ docker info


## docker test hello world
  $ docker run hello-world
  $ docker ps
  $ docker ps -a
  $ docker ps -q
  $ docker ps --format '{{.Image}}'
  $ docker run -it centos /bin/bash
  $ docker run --name nodejs node node --version
  $ docker run node node --version
  $ docker run --rm -it node node --version

## docker image
  $ docker images [tag, image_id, created_id, virtual_size]
  $ docker pull image
  $ docker run image
  $ docker rmi image_id
  $ docker rmi image_id -f (force)
  $ docker inspect image_id
  $ docker run [-- option] image_name [cmd]
  $ docker history imageId
  $ docker top containerID
  $ docker start/stop/restart containerID
  $ docker rm containerId1 containerId2 containerId3
  $ docker stats
  $ docker stats containerId
  $ docker exec -it containerId [cmd]
  $ docker attach containdId   // https://www.baeldung.com/ops/docker-attach-detach-container
  $ docker pause/unpause containerID
  $ docerk run  --name lek --rm node node --version


## docker lifecycle
  - created->running->killed
  - puased[pause/unpause]
  - stoped[stop/restart]


## working with container
- architecture
  - vm architecture : app->guest_os->hypervisor[vmware or hyper-v]->host_os->server
  - container(docker) architechture : app->docker_engine [container]->host_os->server

## container & host
- docker standalone and swarm mode
  - service docker stop/start
    $ Docker service: Docker service will be the image for a microservice within the context of some larger application. Examples of services might include an HTTP server, a database, or any other type of executable program that you wish to run in a distributed environment
    $ docker run is used to create a standalone container
    $ docker service create is used to create instances (called tasks) of that service running in a cluster (called swarm) of computers (called nodes). Those tasks are containers of cource, but not standalone containers. In a sense a service acts as a template when instantiating tasks.

- containers & shells
- Dockerfile
  from, maintainer, run, cmd
- building files
  docker build
  docker build -t imageName:tagName dir
  ex: sudo docker build –t myimage:0.1 .


- managing ports
    $ sudo docker run -p 8080:8080 -p 50000:50000 jenkins

- building web server docker file
- instruction command
  CMD [“echo” , “hello world”]
  ENTRYPOINT [“echo”]
  ENV var1=Tutorial var2=point
  WORKDIR /newtemp


- containner linking
  $ docker run -d -P --name web --link db:db training/webapp python app.py

- storage
- networking
  $ docker run -it --network some-network --rm mongo mongo --host some-mongo test
- docker nodejs
- docker mongodb
   docker run --name some-mongo -d mongo:4.4.9-focal
- docker nginx
- logging
- docker-compose
- continuous integration

## copy file
docker cp index.js container_id:/index.js

## docker-compose
- installation   (linux)
  https://docs.docker.com/compose/install/
  - sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  - sudo chmod +x /usr/local/bin/docker-compose

- version
- services
- image
- restart : always
- environment
- ports:
- enveronment


docker network ls
docker volume ls

```
