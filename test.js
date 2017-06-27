app.get('/:user', function(req, res) { 
  var posts = new Array();
  request('https://www.reddit.com/user/' + req.params.user + '/.json?limit=100000', function (error, response, body) {
    var data = JSON.parse(body).data.children;
    for(var i = 0; i < data.length; i++) {
      posts.push({
        id: data[i].data.id,
        contenttype: 'text/plain',
        content: data[i].data.body,
        language: 'en',
        created: data[i].data.created_utc,
        parentid: data[i].data.parent_id
      });
    };
  });

  personality_insights.profile({
    content_items: posts,
    consumption_preferences: true
  },
  function (err, response) {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.stringify(response, null, 2));
    }
  });


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
      //console.log(obj.data.body);
      posts.push({
        id: data[i].data.id,
        //id: obj.data.link_id,
        contenttype: 'text/plain',
        content: data[i].data.body,
        language: 'en',
        //reply: 
        created: data[i].data.created_utc,
        parentid: data[i].data.parent_id
      });
    };
    //console.log(posts);
    personality_insights.profile({
      content_items: posts,
      consumption_preferences: true
    },
    function (err, response) {
      if (err) {
        res.send(err);
      } else {
        //console.log(JSON.stringify(response, null, 2));
        res.send(JSON.stringify(response, null, 2));
      }
    });
  });
});

app.get('/:user', function(req, res) { 
  var posts = new Array();
  request('https://www.reddit.com/user/' + req.params.user + '/.json?limit=100000', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred 
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    //res.set('Content-Type','application/json');
    console.log(1);
    var postdata = JSON.parse(body).data.children;
    console.log(2);
    //res.send(200, body);
    for(var i = 0; i < postdata.length; i++) {
      //console.log(obj.data.body);
      posts.push({
        id: postdata[i].data.id,
        //id: obj.data.link_id,
        contenttype: 'text/plain',
        content: postdata[i].data.body,
        language: 'en',
        //reply: 
        created: postdata[i].data.created_utc,
        parentid: postdata[i].data.parent_id
      });
    };
    //console.log(posts);
    personality_insights.profile({
      content_items: posts,
      consumption_preferences: true
    },
    function (err, response) {
      if (err) {
        res.send(err);
      } else {
        //console.log(JSON.stringify(response, null, 2));
        res.send(response);
        //res.set('Content-Type','application/json');
        //res.send(JSON.stringify(response, null, 2));
      }
    });
    console.log(3);
  });
});