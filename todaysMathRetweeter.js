var T = require('twit');
var twitterApiConf = require(process.env.BCT_TWTR_CONF_PATH);
var twitter = new T(twitterApiConf);
var tweeter = require('./tweeter');
var noget = require('noget/src/translator');

// TODO:
// externalize retweet keyword terms into a file for each day of the week
// improve the accuracy of the keyword terms in terms of the bornciphertruth brand mission
// make retweet functionality intelligent enough to identify junk or irrelevant retweets
// add functinality for replying to tweets with relevant text 

switch(new Date().getDay()) {
	
	case 0: // Sunday

		tweeter.searchAndRetweet('%23alkebulan');
		tweeter.searchAndRetweet('%23kemet black');
		tweeter.searchAndRetweet('kemet black');
		tweeter.searchAndRetweet('%23sankofa black');
		tweeter.searchAndRetweet('%23maat black'); 
		tweeter.searchAndRetweet('sankofa black');
		tweeter.searchAndRetweet('maat black'); 
		tweeter.searchAndRetweet('yin yang balance');
		tweeter.searchAndRetweet('Dimethyltryptamine');
		tweeter.searchAndRetweet('%23taoism');

		break;
	
	case 1: 

		tweeter.searchAndRetweet('bible proverbs');
		tweeter.searchAndRetweet('african proverbs');
		tweeter.searchAndRetweet('black proverbs');
		tweeter.searchAndRetweet('chinese proverbs');
		tweeter.searchAndRetweet('japanese proverbs');
		tweeter.searchAndRetweet('jamaican proverbs');
		tweeter.searchAndRetweet('native american proverbs');
		tweeter.searchAndRetweet('bible proverb');
		tweeter.searchAndRetweet('african proverb');
		tweeter.searchAndRetweet('black proverb');
		tweeter.searchAndRetweet('chinese proverb');
		tweeter.searchAndRetweet('japanese proverb');
		tweeter.searchAndRetweet('jamaican proverb');
		tweeter.searchAndRetweet('native american proverb');
		tweeter.searchAndRetweet('bushido proverb');

		break;
	
	case 2: 

		tweeter.searchAndRetweet('bible wisdom');
		tweeter.searchAndRetweet('african wisdom');
		tweeter.searchAndRetweet('black wisdom');
		tweeter.searchAndRetweet('chinese wisdom');
		tweeter.searchAndRetweet('japanese wisdom');
		tweeter.searchAndRetweet('jamaican wisdom');
		tweeter.searchAndRetweet('native american wisdom');
		tweeter.searchAndRetweet('bushido code');

		tweeter.searchAndRetweet('quantum physics');
		tweeter.searchAndRetweet('quantum entanglement');
		tweeter.searchAndRetweet('quantum mechanics');
		tweeter.searchAndRetweet('quantum theory');
		tweeter.searchAndRetweet('double slit test');
		tweeter.searchAndRetweet('wave particle duality');
		tweeter.searchAndRetweet('the red pill');

		break;
	
	case 3: 

		tweeter.searchAndRetweet('black panther movement');
		tweeter.searchAndRetweet('Angela Davis'); 
		tweeter.searchAndRetweet('Assata Shakur'); 
		tweeter.searchAndRetweet('Huey Newton'); 
		tweeter.searchAndRetweet('Fred Hampton'); 
		tweeter.searchAndRetweet('Eldridge Cleaver');
		tweeter.searchAndRetweet('Noble Drew Ali');
		tweeter.searchAndRetweet('Wallace Fard Muhammad');
		tweeter.searchAndRetweet('Cheikh Anta Diop');
		tweeter.searchAndRetweet('John Henrik Clarke');
		tweeter.searchAndRetweet('Yosef Ben Jochannan');
		tweeter.searchAndRetweet('Ivan Van Sertima');
		tweeter.searchAndRetweet('Chancellor Williams'); 
		
		break;
	
	case 4:

		tweeter.searchAndRetweet('Marcus Garvey');
		tweeter.searchAndRetweet('Malcolm X');
		tweeter.searchAndRetweet('Minister Louis Farrakhan');
		tweeter.searchAndRetweet('Minister Farrakhan');
		tweeter.searchAndRetweet('Elijah Muhammad'); 
		tweeter.searchAndRetweet('Bob Marley'); 
		tweeter.searchAndRetweet('Nelson Mandela'); 
		tweeter.searchAndRetweet('Winnie Mandela'); 
		tweeter.searchAndRetweet('Clarence 13X Allah'); 
		tweeter.searchAndRetweet('Leonard Howell'); 
		tweeter.searchAndRetweet('Allah School in Mecca'); 
		tweeter.searchAndRetweet('Muhammad Ali');
		tweeter.searchAndRetweet('Stokely Carmichael');
		tweeter.searchAndRetweet('Kwame Ture'); 
		tweeter.searchAndRetweet('Dr Amos Wilson'); 
		tweeter.searchAndRetweet('Frances Cress Welsing');
		tweeter.searchAndRetweet('Khalid Muhammad');
		tweeter.searchAndRetweet('Imphotep');
		tweeter.searchAndRetweet('Maya Angelou');
		
		break;

	case 5:  
		
		tweeter.searchAndRetweet('Marcus Mosiah Garvey'); 
		tweeter.searchAndRetweet('Seneca'); 
		tweeter.searchAndRetweet('epictetus');
		tweeter.searchAndRetweet('ralph waldo emerson');
		tweeter.searchAndRetweet('henry david thoreau');
		tweeter.searchAndRetweet('leo tolstoy'); 
		tweeter.searchAndRetweet('dostoyevsky'); 
		tweeter.searchAndRetweet('mahatma gandhi'); 
		tweeter.searchAndRetweet('Marcus Aurelius'); 
		tweeter.searchAndRetweet('Napoleon Hill');
		tweeter.searchAndRetweet('Dale Carnegie');
		tweeter.searchAndRetweet('Thich Nhat Hanh');
		tweeter.searchAndRetweet('%23dalialama');

		break;

	case 6: 

 	 	tweeter.searchAndRetweet('"Message to the Blackman"');
    		tweeter.searchAndRetweet('"How to Eat to Live"');
    		tweeter.searchAndRetweet('"Understanding the Assault on the Black Man, Black Manhood and Black Masculinity"');
		tweeter.searchAndRetweet('autobiography of Malcolm X');
		tweeter.searchAndRetweet('8020 rule');
    		tweeter.searchAndRetweet('"simplicity simplicity simplicity"');
    		tweeter.searchAndRetweet('"run away from the 90 percent"');
    		tweeter.searchAndRetweet('"as a man thinketh"');
    		tweeter.searchAndRetweet('"better in tune with the infinite" Electronica');
    		tweeter.searchAndRetweet('"think and grow rich"');
    		tweeter.searchAndRetweet('"the kingdom of God is within you"');
    		tweeter.searchAndRetweet('seek first the kingdom');
    		tweeter.searchAndRetweet('"fear none but God"');
    		tweeter.searchAndRetweet('%23LaoTzu'); 
    		tweeter.searchAndRetweet('%23Confucius'); 
    		tweeter.searchAndRetweet('%23SunTzu');
    		tweeter.searchAndRetweet('%23cointelpro');
    		tweeter.searchAndRetweet('%23mkultra');
    		tweeter.searchAndRetweet('%23socialengineering');
    		tweeter.searchAndRetweet('%23Adinkra');
    		tweeter.searchAndRetweet('ankh symbol');
    		tweeter.searchAndRetweet('yin yang symbol');

		break;

	default: 

		tweeter.searchAndRetweet('%23Wisdom african');
}

/*

create arrays for the following mon, tues, wed, etc 

#alkebulan
#kemet black
kemet black
#sankofa black
sankofa black
#maat black 
maat black 
yin yang balance 
Dimethyltryptamine
#taoism

bible proverbs
african proverbs
black proverbs
chinese proverbs
japanese proverbs
jamaican proverbs
native american proverbs
bible proverb
african proverb

black proverb
chinese proverb
japanese proverb
jamaican proverb
native american proverb
bible wisdom
african wisdom
black wisdom
chinese wisdom
japanese wisdom

jamaican wisdom
native american wisdom
black panther movement
Angela Davis 
Assata Shakur 
Huey Newton 
Fred Hampton 
Eldridge Cleaver 
Noble Drew Ali

Cheikh Anta Diop
John Henrik Clarke 
Yosef Ben Jochannan 
Ivan Van Sertima 
Chancellor Williams 
Marcus Garvey
Malcolm X
Minister Louis Farrakhan
Minister Farrakhan
Elijah Muhammad 
Bob Marley 
Clarence 13X Allah 
Leonard Howell 
Allah School in Mecca 
Muhammad Ali
Stokely Carmichael
Kwame Ture 
Dr Amos Wilson 
Frances Cress Welsing 

Seneca 
epictetus
ralph waldo emerson
henry david thoreau
leo tolstoy 
dostoyevsky 
Marcus Aurelius 
Napoleon Hill
Zig Ziglar 
Dale Carnegie 
Jim Rohn 
Imphotep

8020 rule 
"simplicity simplicity simplicity"
"run away from the 90 percent"
"as a man thinketh"
"better in tune with the infinite" Electronica
"think and grow rich" 
#LaoTzu 
#SunTzu
 

*/


