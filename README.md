## maesil-server API

# API Server, mysql RUN
```
cd maesil-server
docker-compose up (-d)
```

# Maesil FE RUN
### 기존에 80 port가 돌고 있다면 docker ps -> docker stop [containerId] -> docker rm [containerId]
```
cd maesil-server/app/build
docker build -t [iamgeName] .
docker run -p 80:80 -d [imageName]
```



