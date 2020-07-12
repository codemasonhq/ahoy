# Running Laravel Dusk Tests in Docker

Ahoy makes it easy to get started using Laravel Dusk. 

## Install services with Ahoy

Use Ahoy to install the services your Laravel project needs. 

```
$ ahoy install laravel --with="php,mariadb,dusk"
 
 Crafting laravel application with php
 ... Wrote .dockerignore
 ... Wrote Dockerfile
 ... Wrote docker-compose.yml
 
$ docker-compose up -d
 ```

The `dusk` service will add a Selenium service to our `docker-compose.yml` file.

The Selenium instance which Dusk runs on will be accessible via your browser at `http://localhost:4444/wd/hub`


## Install Laravel Dusk

First, you will need to have installed Laravel Dusk in your Laravel project. 

As per the docs, install `laravel/dusk` Composer dependency to your project
```
$ composer require --dev laravel/dusk
```

Then run the `dusk:install` command
```
$ docker-compose run --rm web php artisan dusk:install
```

Remember for Dusk to access your Selenium instance, you'll need to set the `REMOTE_WEB_DRIVER` env var to `http://dusk:4444/wd/hub`


## Run Dusk tests

With Laravel Dusk and your Selenium driver successfully installed you can run your Laravel Dusk tests.

Run your Laravel Dusk tests with

```
$ docker-compose run --rm web php artisan dusk
```
