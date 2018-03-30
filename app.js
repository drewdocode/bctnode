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
		console.log(data);
	});
}

var operate = function() {
    tweet(noget.toTodaysMath());

    // when im finally launched i tweet the following
    // tweet(noget.toTodaysMath() + ' #todaysMath #todaysMathematics');
}

var live = function() {
    operate();
    setInterval(operate, 1000 * 60 * 60 * 24);
}

live();

