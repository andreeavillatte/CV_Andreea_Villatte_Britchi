//declaration de l'app
var coinLectureApp = angular.module('coinLectureApp', ['ngRoute', 'ngSanitize']);
coinLectureApp.run(function ($rootScope, $http, $rootScope) {
    //je récupère le JSON pour competences
        $http.get("assets/json/skills.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de competences.json dans la variable
            $rootScope.skills = response.data;
        });
        //je récupère le JSON pour experiences
        $http.get("assets/json/experiences.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de experiences.json dans la variable
            $rootScope.experiences = response.data;
        });
        //je récupère le JSON pour la formation
        $http.get("assets/json/formation.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de json.json dans la variable
            $rootScope.formation = response.data;
        });
        //Nu sterge urmatoarele patru randuri
        $rootScope.cartList = [];
        $rootScope.articleCount = 0;
        $rootScope.cartList = [];
        });
//config des routes
coinLectureApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home/:cat?', {
            controller: 'homeController',
            templateUrl: 'assets/partials/home.html'
        })
        // dans cette route, on récupère un paramêtre : id

        .when('/experiences', {
            controller: 'experiencesController',
            templateUrl: 'assets/partials/experiences.html'
        })
        .when('/competences', {
            controller: 'competencesController',
            templateUrl: 'assets/partials/competences.html'
        })
        .when('/formation', {
            controller: 'formationController',
            templateUrl: 'assets/partials/formation.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
coinLectureApp.filter('euroFormat', function () {
    return function (input) {
        return input + ' \u20AC';
    };
});
coinLectureApp.controller('mainController', function ($rootScope, $scope, $http, $routeParams, $location) {
    // Lorsque le boutton appelle la fct ajoutPanier
    $scope.ajoutPanier = function (ID) {
        $scope.thisArticle=ID;
        console.log(ID);
        $('.addedArticle').modal('show');
        $rootScope.articleCount++;
        // On part du principe que l'article n'est pas dans le panier
        var articlePush = true;
        // On parcourt le panier
        for (var i = 0; i < $rootScope.cartList.length; i++) {
            // Si l'id de l'article parcouru correspond a celui qu'on va ajouter au tableau
            if ($rootScope.cartList[i].id == ID) {
                // On modifie seulement sa quantitée
                $rootScope.cartList[i].quantite++;
                // On indique qu'il ne faut pas le rajouter à la liste
                articlePush = false;
            }
        }
    }
    $scope.gotoUrl = function (url) {
        $location.path(url);
    };
});