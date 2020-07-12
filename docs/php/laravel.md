# Laravel

## Reference

Usage
```
$ ahoy install laravel
```

Available options
- [`php`]()
- [`mariadb`](#using-mariadb)
- [`mysql`](#using-mysql)
- [`scheduler`](#run-scheduler-queue-worker)
- [`horizon`](#run-horizon)
- [`redis`](#using-redis)
- [`elasticsearch`](#using-elasticsearch)
- [`dusk`](#using-dusk)


## Run PHP (Laravel & Artisan Commands)

This is the heart of the Laravel language pack. The `php` service comes with PHP, Composer and NGINX. 
Your Laravel app will be available on port `localhost:80` by default.

You can run any `artisan` command through this Docker container

```bash
$ docker-compose run --rm web php artisan inspire

Well begun is half done. - Aristotle
```

Or any `composer` command
```bash
$ docker-compose run --rm web composer install
```

## Using MariaDB

The Laravel language pack makes it very easy to connect to your MariaDB database. 

Simply update your `.env` file with the credentials to connect to your MariaDB container. 

In particular you will need to update the `DB_HOST` env var to use the name of your database container (which is `mysql` by default). 

```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

## Using MySQL 

The Laravel language pack makes it very easy to connect to your MySQL database. 

Simply update your `.env` file with the credentials to connect to your MySQL container. 

In particular you will need to update the `DB_HOST` env var to use the name of your database container (which is `mysql` by default). 

```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```


## Run Scheduler / Queue Worker 

The Laravel Task scheduler can be easily added to your project by selecting the `scheduler` service provided by the language pack.
There's no configuration required! It works right out of the box.

If you inspect the `docker-compose.yml` file Ahoy generated for you, you'll see we're simply creating a new `scheduler` service
with the command adding the scheduler Cron entry to the container. 

```
$ ahoy install laravel --with="php,mariadb,scheduler"

Crafting laravel application with php
... Wrote .dockerignore
... Wrote Dockerfile
... Wrote docker-compose.yml

$ docker-compose up
```
 
[Learn more about Laravel Task Scheduling](https://laravel.com/docs/scheduling)


## Run Horizon

Running Laravel Horizon on Docker is very easy with Ahoy.

**NOTE:** Before you can run Horizon, you will need to [install Laravel Horizon](https://laravel.com/docs/7.x/horizon#installation) and configure your Laravel project to be powered by Redis queues. 
You learn how to configure Redis queues in the [Using Redis](#using-redis) section of the docs. 

The Horizon service can be added to your project by selecting the `horizon` service provided by the language pack. Provided you have already
set your Laravel project up to use Redis queues, this will require no further configuration.

```
$ ahoy install laravel --with="php,mariadb,scheduler,redis,horizon"

Crafting laravel application with php
... Wrote .dockerignore
... Wrote Dockerfile
... Wrote docker-compose.yml

$ docker-compose up
```

[Learn more about Laravel Horizon](https://laravel.com/docs/horizon)
 

## Using Redis

Using Redis is nice and simple with Ahoy.
 
A Redis service can be added to your projects Docker Compose file by selecting the `redis`
service provided by the language pack. Once installed and connected to your Laravel project you will be able to use things 
like [Redis powered Laravel queues](https://laravel.com/docs/queues#driver-prerequisites) and [Laravel Horizon](#run-horizon).

Once you have the Redis service added, simply update your `.env` file with credentials to connect to your Redis container. 
Remember, the `REDIS_HOST` value is the name of your Redis service (which is `redis` by default). 
```
REDIS_HOST=redis
REDIS_PASSWORD=
REDIS_PORT=6379
```

You can then enable Redis caching and/or Redis session management by switching the `CACHE_DRIVER` and `SESSION_DRIVER` 
values to `redis`
```
CACHE_DRIVER=redis
SESSION_DRIVER=redis
```

**NOTE:** Remember, you may need to install `PhpRedis` or `predis/predis`. [Learn more](https://laravel.com/docs/redis#introduction) 

```
$ ahoy install laravel --with="php,mariadb,redis"

Crafting laravel application with php
... Wrote .dockerignore
... Wrote Dockerfile
... Wrote docker-compose.yml

$ docker-compose up
```


## Using Elasticsearch

Your Laravel project can use Elasticsearch very easily with Ahoy.

Add the Elasticsearch service to your projects Docker Compose file by selecting the `elasticsearch` service provided by the language pack.

```
 $ ahoy install laravel --with="php,mariadb,elasticsearch"
 
 Crafting laravel application with php
 ... Wrote .dockerignore
 ... Wrote Dockerfile
 ... Wrote docker-compose.yml
 
 $ docker-compose up
 ```

Elasticsearch will be accessible via your browser at `http://localhost:9200`. Remember to access Elasticsearch inside 
your `web` service, the hostname is the name of the Elasticsearch container (by default `elasticsearch`).

With Elasticsearch installed you will be able to use it as a driver for [Laravel Scout](https://laravel.com/docs/scout)  

## Using Dusk

Ahoy will let you quickly start using Laravel Dusk.

Add the Dusk service to your projects Docker Compose file by selecting the `dusk` service provided by the language pack.
This will install a service that runs Selenium.
  
```
 $ ahoy install laravel --with="php,mariadb,dusk"
 
 Crafting laravel application with php
 ... Wrote .dockerignore
 ... Wrote Dockerfile
 ... Wrote docker-compose.yml
 
 $ docker-compose up
 ```

Selenium will be accessible on  `http://localhost:4444/wd/hub`

Once you have [installed Laravel Dusk](https://laravel.com/docs/dusk#installation), you will be able to run your Dusk tests
 
```
$ php artisan dusk
```
