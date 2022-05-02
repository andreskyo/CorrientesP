FROM node:14.16.0-alpine as build
WORKDIR /app
ADD package.json .
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.19.6-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
