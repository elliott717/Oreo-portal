FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3011
EXPOSE 3011

CMD [ "npm", "start" ]
