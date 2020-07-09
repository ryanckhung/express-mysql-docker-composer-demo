#!/bin/bash

# build the docker file
docker build -t ryanckhung/node-web-app .

# start the node server
docker run -d --name node-server -p 49160:8080 ryanckhung/node-web-app
