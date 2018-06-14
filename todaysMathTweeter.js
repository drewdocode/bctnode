var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

var day = new Date().getDate();
var date = (new Date().getMonth() + 1) + '/' + (new Date().getDate()) + '/' + (new Date().getFullYear());
var hashtags = day % 2 == 0 ? '#todaysMathematics #suprememathematics' : '#todaysMath #supremealphabet';
//tweeter.tweet('Peace to the gods and earths, suns, moons and stars. ' + date);
tweeter.tweet(date + '. Today\'s mathematics is - ' +  noget.toTodaysMath() + ' - ' + hashtags);

