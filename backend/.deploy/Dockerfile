FROM php:8.1-fpm-alpine

WORKDIR /var/www

#install packages
RUN apk update && apk add \
    build-base \
    vim \
    bash \
    curl \
    openssh \
    xdebug \
    git

#install postgres support
RUN set -ex \
  && apk --no-cache add \
    postgresql-dev
RUN docker-php-ext-install pdo pdo_pgsql

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY ./laravel.ini /usr/local/etc/php/conf.d
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

# Add php.ini
COPY ./php/php.ini /usr/local/etc/php/conf.d/40-custom.ini

# Replace env variables in php.ini
ARG DOCKER_HOST_IP
RUN sed -i 's#{{DOCKER_HOST_IP}}#'$DOCKER_HOST_IP'#g' /usr/local/etc/php/conf.d/40-custom.ini

# Run composer install
ARG COMPOSER_ALLOW_SUPERUSER=1
RUN composer install

# Clean
RUN rm -rf /var/cache/apk/* && docker-php-source delete

# Change current user to non-root user
USER www
