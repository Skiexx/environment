FROM nginx:1.23-alpine
COPY default.prod.conf /etc/nginx/templates/default.conf.template