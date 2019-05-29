//controller formationController
coinLectureApp.controller('formationController', function ($scope, $rootScope, $location ,$sanitize) {
    $(function(){
        AOS.init({
          easing: 'ease-in-out-sine',
          duration: 1000,
          once: false,
        });
        $(window).scroll(function () {
          if ($(window).scrollTop() <= 80) {
            $('nav').removeClass('solid-nav');
            $('a').removeClass('changeColor');
          } else {
            $('nav').addClass('solid-nav');
            $('a').addClass('changeColor');
          }
        });
    });
});
