# Using Local SSL

> This feature is currently for MacOS users only

Ahoy makes it easy to use local SSL in your development with the `secure` command. The secure command is a helpful 
little command that automatically creates a trusted local SSL certificate for a domain. If you've ever tried to
setup a local SSL certificate, you'll know why this command is handy.

This is what the `secure` command does behind the scenes 

* Adds a reverse proxy service to your `docker-compose`
* Will tidy up any conflicting ports
* Creates trusted root and domain certificates 
* Adds the domain to the hosts file.


## Usage


When you run `ahoy secure` it will read your `docker-compose.yml` file and ask which service you want to secure
 
```bash
ahoy secure 
? Which service should be secured? (Use arrow keys)
❯ web
  horizon
  scheduler
  mysql
  redis
```

You can also pass the service you wish to secure to the command

```bash
ahoy secure web
```

Ahoy will now go about creating a local domain secured by HTTPS. 

If you wish to specify the domain, you can pass it in with the `--domain` flag

```bash
ahoy secure web --domain ahoyworld.local
```  
