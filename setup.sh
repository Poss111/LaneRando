docker build -t poss11111/lane-rando-ui .
docker images
docker run -d -it -p 80:80/tcp --name lane-rando-ui poss11111/lane-rando-ui:latest
