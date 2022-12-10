FROM php:8.1-fpm-alpine

ARG USER

WORKDIR /app

#install packages
RUN apk update && apk add \
    build-base \
    nano \
    bash \
    curl

# Install extensions
RUN curl -sSLf \
            -o /usr/local/bin/install-php-extensions \
            https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions
RUN chmod +x /usr/local/bin/install-php-extensions
RUN install-php-extensions \
            pdo \
            pdo_pgsql

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add ini-files
COPY ./.deploy/php.ini /usr/local/etc/php/conf.d/40-custom.ini


# Run composer install
#RUN composer install - закоменченно, так как пока нет laravel проекта

# Clean
RUN rm -rf /var/cache/apk/* && docker-php-source delete

COPY laravel /app
RUN composer update

# Create a non-root user
RUN addgroup -g 1000 -S $USER && \
    adduser -u 1000 -S $USER -G $USER

# Change current user to non-root user
USER $USER

# Expose port 9000 and start php-fpm server
ARG BACKEND_PORT
EXPOSE $BACKEND_PORT
CMD ["php-fpm"]