var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

/*

%23supremealphabet
%23suprememathematics %23todaysMath %23todaysMathematics
%23nationofgodsandearths
%23fivepercentnation

*/

tweeter.searchAndRetweet('%23selfknowledge');
tweeter.searchAndRetweet('%23africanproverbs');
tweeter.searchAndRetweet('%23blackquotes');
tweeter.searchAndRetweet('%23zenquotes');
//tweeter.searchAndRetweet('%23wisdom');
//tweeter.searchAndRetweet('%23understanding');
//tweeter.searchAndRetweet('%23suprememathematics %23todaysMath %23todaysMathematics');
//tweeter.searchAndRetweet('%23suprememathematics %23todaysMath');
//tweeter.searchAndRetweet('%23WednesdayWisdom');

