FROM php:8.1-fpm-alpine
ARG USER

WORKDIR /app

#install packages
RUN apk update && apk add \
    build-base \
    vim \
    bash \
    curl

# Install extensions
RUN curl -sSLf \
            -o /usr/local/bin/install-php-extensions \
            https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions
RUN chmod +x /usr/local/bin/install-php-extensions
RUN install-php-extensions \
            pdo \
            pdo_pgsql \
            xdebug

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add ini-files
COPY ./.deploy/php.ini /usr/local/etc/php/conf.d/40-custom.ini
COPY ./.deploy/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

# Replace env variables in xdebug.ini
RUN sed -i 's#{{DOCKER_HOST_IP}}#'$DOCKER_HOST_IP'#g' /usr/local/etc/php/conf.d/xdebug.ini

# Clean
RUN rm -rf /var/cache/apk/* && docker-php-source delete

# Create a non-root user
RUN addgroup -g 1000 -S $USER && \
    adduser -u 1000 -S $USER -G $USER

# Copy laravel and run composer install
COPY --chown=$USER:$USER ./laravel /app
RUN composer install

# Change current user to non-root user
USER $USER

# Expose port and start php-fpm server
ARG BACKEND_PORT
EXPOSE $BACKEND_PORT
CMD ["php-fpm"]