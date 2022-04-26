FROM node:8.12.0-alpine

RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm

ADD package.json .

RUN npm install --loglevel verbose

COPY . .

EXPOSE 3000

RUN npm run build

FROM nginx:1.14-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /build /usr/share/tdr-public-cms/publiccms
