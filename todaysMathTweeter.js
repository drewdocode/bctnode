var T = require('twit');
var twitterApiConf = require('./twitterConf_dontCommit');
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

// tweet immediately

tweeter.tweet('the time is ' + new Date().getTime());

// poll every minute to see if it's time to tweet yet 

setInterval(function() {
        // tweet daily at born hundred hours
        var date = new Date(); 
        if(date.getHours() === 9 && date.getMinutes() === 0) {
                tweet(noget.toTodaysMath() + ' #todaysMath');
        }
}, 60000); 

