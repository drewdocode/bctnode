var T = require('twit');
var twitterApiConf = require('./twitterConf_dontCommit');
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

// tweet immediately

tweeter.tweet('the time is ' + new Date().getTime());

// poll every minute to see if it's time to tweet yet 

setInterval(function() {
        // tweet daily at Knowledge Power hundred hours
        var date = new Date(); 
	console.log('hour: ' + date.getUTCHours() + ' mins: ' + date.getUTCMinutes());
        if(date.getUTCHours() === 15 && date.getUTCMinutes() === 47) {
                tweet(noget.toTodaysBuild() + ' #todaysMath');
        }
}, 60000);



