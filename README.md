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

# Installation/Run

Pre-install requirements:  
- MongoDB server instance  
- NPM
- Bower

Install instructions:  
1. Clone repository  
2. Open terminal, cd into folder, ``` npm install ```  and ``` bower install ```  

Run instructions:  
1. Run mongoDB server instance  
2. In cloned folder, terminal ``` node . ```
