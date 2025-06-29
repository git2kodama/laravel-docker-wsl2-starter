# ~/Laravel/infra/php/Dockerfile
FROM php:8.1-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_HOME=/composer

# Composer を同梱
COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

# 必要拡張をインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git unzip libzip-dev libicu-dev libonig-dev && \
    docker-php-ext-install intl pdo_mysql zip bcmath && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# php.ini を差し替え
COPY php.ini /usr/local/etc/php/php.ini

WORKDIR /var/www
