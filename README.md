# Reddit Personality

A fun project that utilizes IBM Watson's Personality Insights API within the context of Reddit comments to return an overview of an user's personality. A demo provided by IBM in the context of twitter tweets may be found [here](http://personality-insights-livedemo.mybluemix.net).

# How It Was Made

MongoDB/Express.JS/Angular.JS/Node.JS  
IBM Watson Personality Insights API  

# Current State of project

Works! Minor improvements to be made in the future.

# To-Do-List  

Improve on the currently used method of getting around $http.get's asynchronous nature by using javascript $timeout; find a better way.  
Complete documentation and readme, push for v1.0 release.  

# Installation / Run

Pre-install requirements:  
- Have a working MongoDB server instance. For a guide, click [here](https://treehouse.github.io/installation-guides/mac/mongo-mac.html).
- NPM. For a guide, click [here](http://blog.teamtreehouse.com/install-node-js-npm-mac).
- Bower. For a guide, click [here](https://bower.io/).

Installation instructions of web-app on local machine:  
1. Clone repository.
2. ``` cd ``` into cloned folder and install project dependencies with ``` npm install ```  and ``` bower install ```  

Instructions to run on local machine:  
1. Run mongoDB server instance.  
2. Start the web-app by navigating into the cloned folder and starting the node.js instance with  ``` node . ```
3. In your browser, navigate to http://localhost:3000.
