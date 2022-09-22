### STAGE 1: Build ###
# We label our stage as 'builder'
FROM node:16.10-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
# Tell Puppeteer to skip installing Chrome
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROMIUM_BIN=/usr/bin/chromium-browser
RUN npm install --silent

FROM node as builder
COPY . .
ARG REFL_CONFIG
RUN npx ng build -c ${REFL_CONFIG}

FROM nginx:alpine
## Copy our default nginx config
ARG NGINX_CONFIG=default
COPY nginx/${NGINX_CONFIG}.conf /etc/nginx/conf.d/default.conf
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
