var app = angular.module('app', ['chart.js'], function($locationProvider){
    $locationProvider.html5Mode(true);
})


app.run(function($rootScope, $http, $location) {
  	url = $location.path() + '/raw';
  	$rootScope.data = 'error: timeout';
  	$http.get(url).success(function(data) {
		$rootScope.data = data;
		console.log($rootScope.data);
  	});
})


app.controller("Personality", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality.length; i++) {
			$scope.labels.push($rootScope.data.personality[i].name);
			$scope.data[0].push($rootScope.data.personality[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Openness", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality[0].children.length; i++) {
			$scope.labels.push($rootScope.data.personality[0].children[i].name);
			$scope.data[0].push($rootScope.data.personality[0].children[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Conscientiousness", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality[1].children.length; i++) {
			$scope.labels.push($rootScope.data.personality[1].children[i].name);
			$scope.data[0].push($rootScope.data.personality[1].children[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Extraversion", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality[2].children.length; i++) {
			$scope.labels.push($rootScope.data.personality[2].children[i].name);
			$scope.data[0].push($rootScope.data.personality[2].children[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Agreeableness", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality[3].children.length; i++) {
			$scope.labels.push($rootScope.data.personality[3].children[i].name);
			$scope.data[0].push($rootScope.data.personality[3].children[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("EmotionalRange", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.personality[4].children.length; i++) {
			$scope.labels.push($rootScope.data.personality[4].children[i].name);
			$scope.data[0].push($rootScope.data.personality[4].children[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Values", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.values.length; i++) {
			$scope.labels.push($rootScope.data.values[i].name);
			$scope.data[0].push($rootScope.data.values[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Needs", function ($scope, $rootScope, $timeout) {
	$scope.labels = [];
	$scope.data = [
		[]
	];
	$timeout(function() {
		for (var i = 0; i < $rootScope.data.needs.length; i++) {
			$scope.labels.push($rootScope.data.needs[i].name);
			$scope.data[0].push($rootScope.data.needs[i].percentile);
		};
		$scope.options = {
		  	scale: {
		        ticks: {
		        	min: 0,
		            max: 1,
		        	stepSize: 0.2
		        }
		    }
		};
  }, 10000);
});

app.controller("Overview", function ($scope, $rootScope, $timeout) {
	$scope.wordCount = 0;
	$scope.strength = "Null";
	$scope.strengthDesc = "Null Description.";
	$scope.textSummary = "";
	$timeout(function() {
		$scope.wordCount = $rootScope.data.word_count;
		if ($scope.wordCount > 6000) {
			$scope.strength = "Very Strong";
			$scope.strengthDesc = "A word count of 6000 or more is a high-quality assessment of someone's personality. It's statistically significant."
		} else if ($scope.wordCount > 3500) {
			$scope.strength = "Strong";
			$scope.strengthDesc = "This is a confident read of someone's personality. It's statistically significant! ...but wait, there's more! For only 6000 words, you'll get something so accurate it's scary."
		} else if ($scope.wordCount > 1500) {
			$scope.strength = "Decent";
			$scope.strengthDesc = "These results are a general impression of this person, and they should be taken with a grain of salt. A word count of 3500 will result in a strong analysis."
		} else if ($scope.wordCount > 100) {
			$scope.strength = "Weak";
			$scope.strengthDesc = "With this many words, you can't get a fair read on someone's personality. Use at least 1500 to get a general impression."
		} else {
			$scope.strength = "Null";
		}
		$scope.textSummary = $rootScope.data.textSummary;
	}, 10000);
});

angular.module('ruapp', []).controller('rusers', function($scope, $http) {
	$scope.orderByField = 'created_at';
	$scope.reverseSort = true;
	$scope.data = null;
	$scope.limit = 5;
  $http.get("http://localhost:3000/rawRecentUsers").then(function(response) {
    $scope.data = response.data;
    //console.log(response.data);
  })
});

