FROM node:8.12.0-alpine

ADD package.json .

RUN apk add --no-cache git

RUN git --version

RUN npm install https://gitlab+deploy-token-680000:EMrr_SwdYN7YsddUpk9H@gitlab.com/dgrcorrientes/tdr-fe-library.git --save-dev

RUN npm install --loglevel verbose

COPY . .

EXPOSE 3000

RUN npm run build

FROM nginx:1.14-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /build /usr/share/tdr-public-cms/publiccms
