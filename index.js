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

app.get('/favicon.ico', function(req, res) {
    res.send(204);
});

app.post('/submit', function(req, res) {
  var object = {user: req.body.username}
  var collection = 'recentUsers';
  collectionDriver.save(collection, object, function(err,docs) {
    if (err) { res.send(400, err); } 
    else { res.redirect('/user/' + req.body.username + '/results'); }
  });
});

app.get('/rawRecentUsers', function(req, res) {
  collectionDriver.findAll('recentUsers', function(error, objs) {
    res.set('Content-Type','application/json'); //G
    res.send(200, {user: objs});  
  });
});

app.get('/user/:user/results/raw', function(req, res) { 
  var posts = new Array();
  request('https://www.reddit.com/user/' + req.params.user + '/.json?limit=1000000', function (error, response, body) {
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    if (error) {
      res.send(error);
    } else {
      var postdata = JSON.parse(body).data.children;
      for(var i = 0; i < postdata.length; i++) {
        posts.push({
          id: postdata[i].data.id,
          //id: postdata[i].data.link_id,
          contenttype: 'text/plain',
          content: postdata[i].data.body,
          language: 'en',
          //reply: 
          created: postdata[i].data.created_utc,
          parentid: postdata[i].data.parent_id
        });
      };
      personality_insights.profile({
        content_items: posts,
        consumption_preferences: true
      },
      function (err, response) {
        if (err) {
          res.send(err);
        } else {
          res.set('Content-Type','application/json');
          res.send(response);
        }
      });
    }
  });
});

app.get('/user/:user/results', function(req, res) { 
    res.render('results');
});

app.get('/', function(req, res) {
  res.render('main');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});