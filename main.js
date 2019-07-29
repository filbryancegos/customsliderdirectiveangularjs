var app = angular.module('mySlider', []);
app.controller('myCtrl', function($scope,$timeout,$interval,$http) {
		$scope.photos = [
			{
				url: 'assets/images/image1.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
			},
			{
				url: 'assets/images/image2.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
			},
			{
				url: 'assets/images/image3.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image1.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image2.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image3.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image1.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image2.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
            },
            {
				url: 'assets/images/image3.jpg',
				content: 'the quick brown fox jumpover the lazy dog'
			}

		] 		
});

app.directive('photoInfo', function() {
	return {
		restrict: 'AE',
        replace: true,
        scope: {
            photos: '='
        },
		link: function(scope,element,attrs) {
            var photolength = scope.photos.length;
            var sliderWrapper = photolength * 800;
            var sliderWrappertotal = sliderWrapper + "px";

            scope.sliderParent = sliderWrappertotal;
            scope.count = 0;
            scope.currentIndex = 1

            scope.nextBol = true;
            scope.prevBol = true;
            scope.buttondisablednext = false; 
            scope.buttondisabledprev = false;
            
            scope.count = scope.count + -800;
            var countwidht = scope.count + "px"
            scope.slidewidth = 'translate('+ countwidht +')';


            scope.next = function(){
				if (scope.currentIndex < scope.photos.length -1) {
                    scope.currentIndex++;
                    scope.count = scope.count + -800;
				} else {
                    scope.currentIndex = 0;
                    scope.count = 0;
                }
                var countwidht = scope.count + "px";
                scope.slidewidth = 'translate('+ countwidht +')';
                if (scope.currentIndex == scope.photos.length -1) {
                    scope.buttondisablednext = true;
                } else {
                    scope.prevBol = true;
                    scope.buttondisabledprev = false; 
                }
            };
            
            scope.prev = function(){
				if (scope.currentIndex > 0) {
                    scope.currentIndex--;
                    scope.count = scope.count - -800;
				} else {
                    scope.photos.length;
                    scope.count = 0;
                }
                var countwidht = scope.count + "px"
                scope.slidewidth = 'translate('+ countwidht +')';

                if (scope.currentIndex == 0) {
                    scope.buttondisabledprev = true;
                } else {
                    scope.buttondisablednext = false; 
                }
			};
        },
        templateUrl:'template/sliderurl.html'
	}
})


  
	
  

