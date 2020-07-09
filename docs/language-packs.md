# Language Packs

Language packs install all the boilerplate files you need to run a fully functional development environment with Docker. 

They are templates that contain the available services and necessary docker files to run a development environment.

**Officially supported language packs:**
- [Laravel](/php/laravel)

**Community contributed language packs:**
- PRs welcome


## Usage 

Install a language pack using the default services
```bash
ahoy install laravel 
```

Pass the `--options` flag with the `ahoy install` command to choose from available services to import
```bash
ahoy install laravel --options
? Choose services to import (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ php
 ◯ mariadb
 ◯ mysql
 ◯ elasticsearch
 ◯ redis
 ◯ horizon
 ◯ scheduler
(Move up and down to reveal more choices)
```  

You can specify exactly which services you'd like to import using the `--with` flag
```bash
ahoy install laravel --with="php,mariadb"
```

## Using different language packs

Ahoy is designed so that people can easily create and share their own language packs.

Simply pass the language pack to the install command and Ahoy will fetch it. Ahoy knows how to access
language packs on GitHub, GitLab and BitBucket

```bash
ahoy install username/repo
```

* GitHub - `username/repo` or `github:username/repo`
* GitLab - `gitlab:username/repo`
* BitBucket - `bitbucket:username/repo`

By default the `master` branch will be used, but you can specify a branch or tag like so: `username/repo#branch`.

If you'd like to use a local language pack, simply provide the path 

```bash
ahoy install ~/path/to/language-pack
```
