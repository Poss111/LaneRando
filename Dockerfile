FROM nginx:1.17.1-alpine
COPY /dist/LaneRando /usr/share/nginx/html
COPY /serverConfig/default.conf /etc/nginx/conf.d/default.conf
