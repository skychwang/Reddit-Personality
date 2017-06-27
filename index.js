var http = require('http'),
  request = require('request'),
	express = require('express'),
	path = require('path'),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
	CollectionDriver = require('./collectionDriver').CollectionDriver,
  querystring = require("querystring"),
  config = require('./config'),
  //watson = require('watson-developer-cloud');
  PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')
  personality_insights = new PersonalityInsightsV3(config.PERSONALITY_INSIGHTS_API_KEY);

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.bodyParser());

var mongoHost = 'localHost'; //A
var mongoPort = 27017; 
var collectionDriver;


var mongoClient = new MongoClient(new Server(mongoHost, mongoPort));
mongoClient.open(function(err, mongoClient) {
  if (!mongoClient) {
    console.error("Error! Exiting... Must start MongoDB first");
    process.exit(1);
  }
  var db = mongoClient.db("MyDatabase");
  collectionDriver = new CollectionDriver(db);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:user', function(req, res) { 
  var posts = new Array();
  request('https://www.reddit.com/user/' + req.params.user + '/.json?limit=100000', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred 
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    //res.set('Content-Type','application/json');
    var data = JSON.parse(body).data.children;
    //res.send(200, body);
    for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      //console.log(obj.data.body);
      posts.push({
        id: obj.data.id,
        content: obj.data.body,
        language: 'en',
        created: obj.data.created_utc
      });
    }
    //console.log(posts);
    personality_insights.profile({
      content_items: posts,
      consumption_preferences: true
    },
    function (err, response) {
      if (err) {
        res.send(err);
      } else {
        console.log(JSON.stringify(response, null, 2));
        res.send(JSON.stringify(response, null, 2));
      }
    });
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});