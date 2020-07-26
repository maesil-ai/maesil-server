## maesil-server API

# API Server, mysql RUN
```
cd maesil-server
docker-compose up (-d)
```

# Maesil FE RUN
#### 기존에 80 port가 돌고 있다면 build전에 해주기☆
```
docker ps -> docker stop [containerId] -> docker rm [containerId]
```

#### 돌고있지 않을경우

```
cd maesil-server/app/build
docker build -t [iamgeName] .
docker run -p 80:80 -d [imageName]
```

### Without Docker
```
cd maesil-server
node server.js
```

