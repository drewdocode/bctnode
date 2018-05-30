var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var noget = require('noget/src/translator');

tweet = function(message) {
	twitter.post('statuses/update', { status: message }, function(err, data, response) {
		console.log('tweeted: ' + message);
	});
};

retweet = function(tweetId) {
	twitter.post('statuses/retweet/' + tweetId,  function(err, data, response) {
		console.log(data);
	});
};

search = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		console.log(data);
	});
};

searchAndRetweet = function(searchQuery) {
	twitter.get('search/tweets', { q: searchQuery }, function(err, data, response) {
		retweet(data.statuses[0].id_str);
	});
};

module.exports.tweet = tweet;
module.exports.retweet = retweet;
module.exports.search = search;
module.exports.searchAndRetweet = searchAndRetweet;

