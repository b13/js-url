/**
 *
 *  Module to get easy access to the url and hash parameters
 *
 *  Author: Daniel Sattler
 *  © 2014 b:dreizehn GmbH, Stuttgart
 */
define(function() {

	var url = function() {
		var me = this;

		function initialize() {
			return me;
		}

			/**
			 * split all url and hash params of a given url
			 * i.e. "?var1=1&var2=2#var3=3
			 * @param {string}
			 * @returns {object}
			 */
		function splitUrlAndHashParams(urlString) {
			urlString = urlString.split("+").join(" ");
			var params = {}, tokens,
				re = /[?&#]?([^=]+)=([^&#]*)/g;
			while (tokens = re.exec(urlString)) {
				params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
			}
			return params;
		}


			/**
			 * PUBLIC: get all url and hash params as object
			 *
			 * @param [string] url
			 * @returns {object}
			 */
		me.getAllUrlAndHashParams = function(url) {
			var url = (typeof url == 'undefined') ? window.location.href : url;
			return splitUrlAndHashParams(url.indexOf('?') > 0 ? url.slice(url.indexOf('?')) : url);
		};


			/**
			 * PUBLIC: get value of a url or hash param from the current url
			 *
			 * @param {string} search
			 * @param [string] url
			 * @returns {string || null}
			 */
		me.getValueForUrlOrHashParam = function(search, url) {
			var
				url = (typeof url == 'undefined') ? window.location.href : url
				, urlParams = splitUrlAndHashParams(url.indexOf('?') > 0 ? url.slice(url.indexOf('?')) : url);
			return (typeof urlParams[search.toString()] !== 'undefined') ? urlParams[search] : null;
		};


		initialize();
	};

	return new url();
});