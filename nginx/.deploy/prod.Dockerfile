FROM nginx:1.23-alpine
COPY default.prod.conf /etc/nginx/conf.d/defalut.conf

ARG NGINX_SERVER
ARG BACKEND_PORT
ARG FRONTEND_PORT

RUN sed -i 's#{{NGINX_SERVER}}#'$NGINX_SERVER'#g' /etc/nginx/conf.d/defalut.conf
RUN sed -i 's#{{BACKEND_PORT}}#'$BACKEND_PORT'#g' /etc/nginx/conf.d/defalut.conf
RUN sed -i 's#{{FRONTEND_PORT}}#'$FRONTEND_PORT'#g' /etc/nginx/conf.d/defalut.conf