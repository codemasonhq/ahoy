# Usage

Ahoy ships with two main commands, `install` and `secure`.

The `ahoy install` command is for installing a language pack into the current working directory. 

The `ahoy secure` command is for automatically creating a local SSL certificate and domain. 
This command is currently only available to MacOS users.

## Install

Install a language pack with the default services
```bash
ahoy install laravel 
```

Pass the `--options` flag to choose from available services or use the `--with` flag 
to specify exactly which services you'd like to use. 

[Learn more about language packs and the install command...](/language-packs)

## Secure

> This command is currently for MacOS users only

The secure command is a helpful little command that automatically creates a trusted local SSL certificate for a domain.
If you've ever tried to setup a local SSL certificate, you'll know why this command is handy.

```bash
ahoy secure
```

The service you wish to secure can be passed as an argument `ahoy secure [service]`. 
Use the `--domain` flag to set the local domain used.  

