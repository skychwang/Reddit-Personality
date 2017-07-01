# Reddit Personality

A fun project that utilizes IBM Watson's Personality Insights API within the context of Reddit comments to return an overview of a reddit user's personality. A demo provided by IBM within the context of twitter tweets and bodies of text may be found [here](http://personality-insights-livedemo.mybluemix.net).

# How It Was Made

MongoDB/Express.JS/Angular.JS/Node.JS  
IBM Watson Personality Insights API  

# Current State of project

Works! Minor improvements to be made in the future.

# To-Do-List  

The app currently uses javascript's $timeout (set to 10 seconds) to get around $http.get's asynchronous calls to the IBM Bluemix service before rendering incoming data. This is a temporary fix, as it relies upon the app to successfully $http.get within the timeframe in order to render the incoming JSON data after the time has run out; if no response is received within the timeframe (a result of say, slow internet speed), the data will not be rendered. A better way needs to be found; perhaps by constructing a customized synchronous $http.get function. TBD.  

# Installation / Run

Pre-install requirements:  
- Have a working MongoDB server instance. For a guide, click [here](https://treehouse.github.io/installation-guides/mac/mongo-mac.html).
- NPM. For a guide, click [here](http://blog.teamtreehouse.com/install-node-js-npm-mac).
- Bower. For a guide, click [here](https://bower.io/).
- Have a working IBM Bluemix Personality Insights service. For a guide, click [here](https://console.bluemix.net/docs/services/personality-insights/getting-started.html#gettingstarted) (Only step 1 is needed; record username and password credentials).

Installation instructions of web-app on local machine:  
1. Clone repository.
2. ``` cd ``` into cloned folder and install project dependencies with ``` npm install ```  and ``` bower install ```  
3. Create ``` config.js ``` in cloned folder root directory and populate it with the following, entering your username and password credentials received from your IBM Bluemix's Personality Insights Service:

```
var PERSONALITY_INSIGHTS_API_KEY = {
username: "usernameFromIBMBluemixServiceHereWithinQuotes",
password: "passwordHereFromIBMBluemixServiceWithinQuotes",
version_date: '2016-10-19'
}

exports.PERSONALITY_INSIGHTS_API_KEY = PERSONALITY_INSIGHTS_API_KEY;
```

Instructions to run on local machine:  
1. Run mongoDB server instance.  
2. Start the web-app by ``` cd ```ing into the cloned folder (if you're not already in) and starting the node.js instance with  ``` node . ```
3. In your browser, navigate to http://localhost:3000.
