# build stage
FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
#copy to server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
#expose degfault port
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]