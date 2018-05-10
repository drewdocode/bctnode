var T = require('twit');
var noget = require('noget/src/translator');

var twitterId = 974419373531324418;
var twitter = new T({
    consumer_key:         'zPs6VxwihDjLDBFXrBtGHoISF',
    consumer_secret:      '48FyaQqhIqFeNtpgDm8oStn5Bo7RT5wsfjejXpcui3Gmjk6F0Q',
    access_token:         '974419373531324418-UbNnX5ccP3LAp7HU5lBsA2gIEE21Wkx',
    access_token_secret:  'Br19AMUKbhKsEyjntEh1RAoscMjiKBsp2MFeRDrZ9iwV9',
});

var tweet = function(message) {
	twitter.post('statuses/update', { status: message }, function(err, data, response) {
		console.log('tweeted: ' + message);
	});
}

var reply = function(message) {
	twitter.reply('', {}, function(err, data, response) {
		console.log('replied: ' + message);
	});
}

var tweetTodaysMathEveryDayAtTheGodHour = function() {
    tweet(noget.toTodaysMath());
}

var tweetTodaysBuildEveryDayAtTheBuildHour = function() {
    tweet(noget.toTodaysBuild());
}

var replyToQueriesForMath = function() {
    // parse out the number and return the math
}

var replyToTodaysMathematicsTweetsToMe = function() {
    // reply to tweets about 'todays math' || 'todays mathematics'
}

var replyToTodaysMathematicsTweetsAnywhere = function() {
    // reply to any tweets about 'todays math' || 'todays mathematics'
}




