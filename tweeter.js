var T = require('twit');
var twitterApiConf = require('./twitterConf_dontCommit');
var twitter = new T(twitterApiConf);
var noget = require('noget/src/translator');

// export function definition for basic tweet functionality

module.exports.tweet = function(message) {
	twitter.post('statuses/update', { status: message }, function(err, data, response) {
		console.log('tweeted: ' + message);
	});
};


