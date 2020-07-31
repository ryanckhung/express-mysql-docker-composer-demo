1.  remove all the continer and prevent the port conflict
    (becareufl the following will clean up all the running containers)
    ### `docker stop $(docker ps -a -q)`
    ### `docker rm $(docker ps -a -q)`
2.  goto ./backend and run the Dockerfile
    ### `docker build -t ryanckhung/node-web-app .`
3.  goto the root and run
    ### `docker-compose up OR > docker-compose up -d`
4.  goto the browser and run
    http://localhost:49160
    http://localhost:49160/users

Remark:
./backend/database.js host is hardcode to "db"
which is defined in ./docker-compose.yml
