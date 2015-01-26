var app = angular.module("gitHubSearch", ['ngMaterial']);

app.controller('ghsController', function($scope, $http){
	$scope.fetch = function(){
		$http.get('http://api.github.com/legacy/repos/search/' + $scope.search).success(function(data){
			$scope.results = data["repositories"];
		});
	}

	$scope.speak = function(scope){
		var msg = new SpeechSynthesisUtterance(scope);
		window.speechSynthesis.speak(msg)
		
	}

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
        return ownerIsNew;
    }
	
})

app.directive('mdItem', function() {
    return {
        restrict: 'E',
        controller: function($scope, $element){
         
         $scope.toggleCards = function(){
           $($element).toggleClass('open-cards');
           $scope.speak($scope.ownerPerResult.owner);
         }
       }
    };
}); 



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