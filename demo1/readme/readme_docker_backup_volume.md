# docker backup volumes

- Youtube : https://youtu.be/mjh82gpnYpk
- https://www.docker.com/blog/back-up-and-share-docker-volumes-with-this-extension/
- 1st option: using docker desktop extension - Volumes Backup & Share
- 2nd option: with the following command line

```
docker volume ls
docker run --rm -v <volume-name>:/backup-volume -v "$(pwd)":/backup busybox tar -zcvf /backup/my-backup.tar.gz /backup-volume
```