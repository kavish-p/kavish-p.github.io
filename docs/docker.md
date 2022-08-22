# Docker

##  Build from Dockerfile

```
docker build -t test-image .
```

## Tag and Push

```
docker tag test-image 10.168.0.62/docker-kavish/test-image:1.0
docker push 10.168.0.62/docker-kavish/test-image:1.0
```