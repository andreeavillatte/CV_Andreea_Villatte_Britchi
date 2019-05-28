//controller competencesController
coinLectureApp.controller('competencesController', function ($scope, $rootScope, $location ,$sanitize) {
    $scope.displayStars = function(rating){
        var stars='';
        for(var i = 0; i < rating; i++){
            stars += '<i class="fas fa-star tx7"></i>';
        }
        var greyStar=5-i;
        for(var i = 0; i < greyStar; i++){
            stars += '<i class="fas fa-star tx5"></i>';
        }        
        return stars;
    };
});