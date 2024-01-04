# Basics

Create a `package.json` file with dependencies
- Express

Create a `.dockerignore` (mostly for the /node_modules folder)

Create `Dockerfile` for installing the dependencies. Use default port 8080

## Build Docker Image

`docker build . -t francisco/nodejs-website`

## Run Docker Image

`docker run --name nodejs-website -p 8080:8080 francisco/nodejs-website`


## Fix
If the container is already created
```
docker rm container_id
```


