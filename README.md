js-youtube
=================

Module to get easy access to the url and hash parameters

# requireJS config

```js
var require = {
	paths: {
		'url' : 'path/to/url'
	}
};
```

# Basic usage

```js
require(['url'], function(url) {

		// get all url and hash params as object
	console.log(url.getAllUrlAndHashParams());

		// get value of a url or hash param from the current url
	console.log(url.getValueForUrlOrHashParam("param"));
});
```