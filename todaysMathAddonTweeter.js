var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var longdate = date.getFullYear() + '' + month + '' + day;
var hashtags = day % 2 == 0 ? '#todaysMathematics #suprememathematics' : '#todaysMath #suprememathematics';
tweeter.tweet(noget.toTodaysMathAddon() + ' - ' + longdate + ' - ' + hashtags);




