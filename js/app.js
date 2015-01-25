var app = angular.module("gitHubSearch", []);

app.controller('ghsController', function($scope, $http, $q){
	$scope.objs = {
  "repositories": [
    {
      "type": "repo",
      "username": "karan",
      "name": "Projects-Solutions",
      "owner": "karan",
      "homepage": "",
      "description": ":pager: Links to other users' solutions to Projects (https://github.com/karan/Projects/)",
      "language": "",
      "watchers": 654,
      "followers": 654,
      "forks": 352,
      "size": 1805,
      "open_issues": 0,
      "score": 19.367487,
      "has_downloads": true,
      "has_issues": true,
      "has_wiki": true,
      "fork": false,
      "private": false,
      "url": "https://github.com/karan/Projects-Solutions",
      "created": "2013-07-31T13:05:16Z",
      "created_at": "2013-07-31T13:05:16Z",
      "pushed_at": "2015-01-24T18:11:13Z",
      "pushed": "2015-01-24T18:11:13Z"
    },
    {
      "type": "repo",
      "username": "jcooky",
      "name": "karan",
      "owner": "karan",
      "homepage": null,
      "description": "Karan Project",
      "language": "Java",
      "watchers": 0,
      "followers": 0,
      "forks": 0,
      "size": 304,
      "open_issues": 0,
      "score": 15.015927,
      "has_downloads": true,
      "has_issues": true,
      "has_wiki": true,
      "fork": false,
      "private": false,
      "url": "https://github.com/jcooky/karan",
      "created": "2012-09-24T06:42:50Z",
      "created_at": "2012-09-24T06:42:50Z",
      "pushed_at": "2013-02-28T05:32:44Z",
      "pushed": "2013-02-28T05:32:44Z"
    },
    {
      "type": "repo",
      "username": "karan3",
      "name": "karan",
      "owner": "karan3",
      "homepage": null,
      "description": "k",
      "language": "",
      "watchers": 0,
      "followers": 0,
      "forks": 0,
      "size": 48,
      "open_issues": 0,
      "score": 15.015927,
      "has_downloads": true,
      "has_issues": true,
      "has_wiki": true,
      "fork": false,
      "private": false,
      "url": "https://github.com/karan3/karan",
      "created": "2012-09-24T13:37:13Z",
      "created_at": "2012-09-24T13:37:13Z",
      "pushed_at": "2012-09-24T13:37:13Z",
      "pushed": "2012-09-24T13:37:13Z"
    },
    {
      "type": "repo",
      "username": "kkishan",
      "name": "karan",
      "owner": "kkishan",
      "homepage": null,
      "description": "",
      "language": "",
      "watchers": 0,
      "followers": 0,
      "forks": 0,
      "size": 112,
      "open_issues": 0,
      "score": 15.015927,
      "has_downloads": true,
      "has_issues": true,
      "has_wiki": true,
      "fork": false,
      "private": false,
      "url": "https://github.com/kkishan/karan",
      "created": "2012-12-22T14:04:11Z",
      "created_at": "2012-12-22T14:04:11Z",
      "pushed_at": "2012-12-22T14:04:11Z",
      "pushed": "2012-12-22T14:04:11Z"
    }
    ]
}

	$scope.results = $scope.objs["repositories"];
	


    var indexedOwners = [];
    
    $scope.ownersToFilter = function() {
        indexedOwners = [];
        return $scope.results;
    }
    
    $scope.filterOwners = function(result) {
        var ownerIsNew = indexedOwners.indexOf(result.owner) == -1;
        if (ownerIsNew) {
            indexedOwners.push(result.owner);
        }
        console.log(indexedOwners);
        return ownerIsNew;
    }

	/*$scope.fetch = function(){
		$http.get('https://api.github.com/legacy/repos/search/' + $scope.search).success(function(data){
			$scope.results = data["repositories"];
		});	
	}*/
})





/*
/////prior to commit 6c4cbf320f where index.html was un-editable
$(document).ready(function(){

	var GitSearch = function(){
		var self = this;

		this.init = function(){
			//event listener on inputfield for keystrokes
			$("#search").on("keyup", function(e){
			   self.request(e.target.value)
			});
		};

		//ajax req
		this.request = function(search){
			$.ajax({
			  url: "https://api.github.com/legacy/repos/search/" + search,
			  success: function(data){
			  	self.sortByOwner(data["repositories"]);
			  }
			});
		};

		//sort data into objs that are rooted by owners
		this.sortByOwner = function(repositories){
			var groupedRepos = {};
			for(x in repositories){
				var ownerCount;
				if(groupedRepos[repositories[x].owner]){
					ownerCount = Object.keys(groupedRepos[repositories[x].owner]).length + 1;
					groupedRepos[repositories[x].owner][ownerCount] = repositories[x];
				} else {
					ownerCount = 1;
					groupedRepos[repositories[x].owner] = {};
					groupedRepos[repositories[x].owner][ownerCount] = repositories[x];
				}
			}
		};

		this.list = function(data){
			var results = $("#results");
			results.html("");
			results.append("<md-list layout='column' class='gitlist'></md-list>");
		}
	};

	var gitSearch = new GitSearch();
	gitSearch.init();
});*/