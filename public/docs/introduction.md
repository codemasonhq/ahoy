# Introduction

Ahoy is a lightweight tool for preparing fully functional Docker development environments 
for the languages and frameworks you love. 
 
**It's open source, it's easy to use and it will save you a boat load of time.**

## Quickstart

Install the Ahoy CLI as a global NPM package
```bash
npm install --global @codemason/ahoy
```

Then install the language pack of your choice e.g. Laravel.
This adds all the Docker files you need for a fully functional development environment

```bash
ahoy install laravel
```

Start your development 
```bash
docker-compose up -d
```

## Requirements

- Docker >= 17.12
- NodeJS, npm
- Git

## Features

* Lightweight
* Get started without needing to know Docker
* Easy to customize via `Dockerfile`
* Choose your favourite services e.g. MySQL, Redis, Postgres, Elasticsearch
* Built with 12-factor apps in mind 
* Instant Docker dev environments with language packs
* Automatic local SSL with the secure command
* Fast image builds


## How it works

Ahoy is really very simple. 

The `ahoy install <language-pack>` command simply adds all the boilerplate files you need to 
run a fully functional Docker development environment for your chosen language/framework to your current directory.

Language packs are basically templates stored locally or remotely on GitHub, GitLab or BitBucket. 
They contain the templates for creating the Docker files needed to run the language/framework 
and any related services an app like yours might use.

The `ahoy install` command will attempt to fetch the language pack at the location you 
have provided and copy those files into your project directory

## Why not ... ?

#### ... Do it myself?

You could very easily do it yourself. There's more than enough tutorials and guides available that will guide you 
through setting up a Docker development environment for practically any framework or language you might use.

The nice thing about Ahoy is it gives you a solid starting point which you can take and customise as much as you need
since all the files are added to your project are normal Docker files. 
  

#### ... Use [LaraDock](https://github.com/laradock/laradock)?

LaraDock is a perfectly fine choice. Ahoy is just a little bit different.  

**LaraDock**
- Clones the entire LaraDock repo with all the services you might not ever need to use 
- Builds a new image for each service (e.g. MySQL, Redis, Elasticsearch) you use whether they need to be customised or not 
- Harder to deploy. Not designed with deployment in mind. 

**Ahoy** 
- Creates a lightweight `Dockerfile` and `docker-compose.yml` file with the selected services only  
- Uses prebuilt images for popular services like MySQL, Redis, Elasticsearch etc. Saving time and disk space
- Easy to deploy. Designed with deployment in mind based on the 12-factor app principles


#### ... Use [Lando](https://lando.dev/)

Lando is a great dev environment tool kit which has it's own way of doing things. 
Ahoy sticks with the standard Docker way of doing things

**Lando**
- Sits on top of Docker. You have to learn the Lando way of doing things
- Introduces new files and commands
- Lando is only for improving your development environment

**Ahoy**
- Uses Docker so you don't have to learn anything new
- Any developer familiar with Docker can easily extend the `Dockerfile` and `docker-compose.yml` files created by Ahoy 
- Makes it easy to achieve dev/prod parity  
