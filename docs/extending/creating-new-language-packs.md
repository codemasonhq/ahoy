# Creating New Language Packs

You can create a language pack for any framework or language to help other 
devs spin up a ready to use Docker development environments.

Language packs are simple, lightweight javascript applications. They require a single `index.js` file which 
acts as the entry point for the Ahoy CLI to process the language pack. Beyond that, you can structure it however you see fit.

The [laravel language pack](/) is a nice example.


### index.js

| Property | Description                                                                           |
| -------- | --------------------------------------------------------------------------------------|
| name     | *[string]* Simple name for your craft kit                                             |
| default  | *[array]* Default containers for craft kit to use                                     | 
| masonJson | *[object]* [Mason JSON](httsp://codemason.io/docs/mason-json) for available containers|


### Example index.js
```javascript
module.exports = {
  name: 'laravel',
  default: ["php", "mysql"],
  masonJson: {
  	php: require('./mason-json/php.js'),
  	mysql: require('./mason-json/mysql.js')
  },
}
```

### Testing your language pack

The Ahoy CLI lets you [use language packs from your local file system](/language-packs#using-different-language-packs). You can use this functionality to test your new language packs.

```bash
ahoy install ~/path/to/language-pack
```
