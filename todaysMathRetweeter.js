var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

switch(new Date().getDay()) {
	case 0: 
		tweeter.searchAndRetweet('%23selfAwareness');
		tweeter.searchAndRetweet('%2knowthyself');
		break;
	case 1: 
		tweeter.searchAndRetweet('%23mindfulness');
		tweeter.searchAndRetweet('%23knowledgeofself');
		break;
	case 2: 
		tweeter.searchAndRetweet('%23showandprove');
		tweeter.searchAndRetweet('%2faith');
		break;
	case 3: 
		tweeter.searchAndRetweet('%23dotheknowledge');
		tweeter.searchAndRetweet('%23suprememathematics');
		break;
	case 4: 
		tweeter.searchAndRetweet('%23africanproverbs');
		tweeter.searchAndRetweet('%23Wisdom');
		break;
	case 5: 
		tweeter.searchAndRetweet('%2lawofattraction');
		tweeter.searchAndRetweet('%2letgoletGod');
		break;
	case 6: 
		tweeter.searchAndRetweet('%23zen');
		tweeter.searchAndRetweet('%2thoughtsbecomethings');
		break;
	default: 
		tweeter.searchAndRetweet('%23Wisdom');
}

