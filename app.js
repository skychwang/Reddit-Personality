var app = angular.module('app', ['chart.js']);

app.controller("Big5", function ($scope) {
  $scope.labels =["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional range"];

  $scope.data = [
    [0.65, 0.20, 0.90, 0.81, 1.00]
  ];

  $scope.options = {
  	scale: {
        ticks: {
        	min: 0,
            max: 1,
        	stepSize: 0.2
        }
    }
  };
});

app.controller("Openness", function ($scope) {
  $scope.labels =["Adventurousness", "Artistic interests", "Emotionality", "Imagination", "Intellect", "Authority-challenging"];

  $scope.data = [
    [0.1, 0.59, 0.90, 0.81, 0.56, 1.00]
  ];

  $scope.options = {
  	scale: {
        ticks: {
        	min: 0,
            max: 1,
        	stepSize: 0.2
        }
    }
  };
});

app.controller("Conscientiousness", function ($scope) {
  $scope.labels =["Achievement striving", "Cautiousness", "Dutifulness", "Orderliness", "Self-discipline", "Self-efficacy"];

  $scope.data = [
    [1.0, 0.1, 0.90, 0.81, 0.56, 0.55]
  ];

  $scope.options = {
  	scale: {
        ticks: {
        	min: 0,
            max: 1,
        	stepSize: 0.2
        }
    }
  };
});

app.controller("Extraversion", function ($scope) {
  $scope.labels =["Activity level", "Assertiveness", "Cheerfulness", "Excitement-seeking", "Outgoing", "Gregariousness"];

  $scope.data = [
    [0.98, 0.87, 1.00, 0.72, 1.00, 0.14]
  ];

  $scope.options = {
  	scale: {
        ticks: {
        	min: 0,
            max: 1,
        	stepSize: 0.2
        }
    }
  };
});