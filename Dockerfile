FROM node:10-alpine as build-step
RUN mkdir -p /application
WORKDIR /application
COPY package.json /application
RUN npm install
COPY . /application
RUN ls -ltr
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /application/dist/LaneRando /usr/share/nginx/html
