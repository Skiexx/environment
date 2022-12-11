# Environment for IT cluster
Окружение содержит в себе следующие компоненты:
* [Docker](https://www.docker.com/) - контейнеризация приложений
* [Docker Compose](https://docs.docker.com/compose/) - управление контейнерами
* [Laravel](https://laravel.com/) - фреймворк для бэкенда
* [Vue.js](https://vuejs.org/) - фреймворк для фронтенда
* [Nginx](https://www.nginx.com/) - веб-сервер
* [PostgreSQL](https://www.postgresql.org/) - СУБД
* [Adminer](https://www.adminer.org/) - удобный веб-интерфейс для работы с СУБД

## Установка dev-окружения
Для установки необходимо выполнить следующие команды:
```bash
git clone https://github.com/skiexx/environment.git
cd environment
cp .env.example .env
nano .env -- или любой другой удобный редактор, например vim
docker-compose up -d
```
После этого в браузере по следующим адресам будут доступны:
* [http://localhost](http://localhost) - фронтенд
* [http://localhost/api](http://localhost/api) - бэкенд
* [http://localhost/adminer](http://localhost/adminer) - удобный веб-интерфейс для работы с СУБД

Примечание: при замене в файле .env значения переменной `NGINX_PORT` на любое другое значение, необходимо будет при обращении к сервисам указывать порт, например, `http://localhost:8080` и `http://localhost:8080/api`.

## Установка prod-окружения
Для установки необходимо выполнить следующие команды:
```bash
git clone https://github.com/skiexx/environment.git
cd environment
cp .env.example .env
nano .env -- или любой другой удобный редактор, например vim
docker-compose -f docker-compose.prod.yml up -d
```
После этого в браузере по следующим адресам будут доступны:
* [http://localhost](http://localhost) - фронтенд
* [http://localhost/api](http://localhost/api) - бэкенд

Примечание: при замене в файле .env значения переменной `NGINX_PORT` на любое другое значение, необходимо будет при обращении к сервисам указывать порт, например, `http://localhost:8080` и `http://localhost:8080/api`.

## Конфигурация
Все настройки окружения находятся в файле `.env`. В нем можно указать следующие параметры:
* `DB_NAME` - имя базы данных
* `DB_USER` - имя пользователя базы данных
* `DB_PASSWORD` - пароль пользователя базы данных
* `FRONTEND_PORT` - порт для фронтенда
* `NGINX_SERVER` - имя сервера для nginx
* `NGINX_PORT` - порт для nginx
