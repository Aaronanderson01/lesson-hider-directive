angular.module('directivePractice').directive('lessonHider', function(){
  return {
    templateUrl: './lessonHider.html',
    restrict: 'E',
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    link: function( scope, element, attributes ) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        for (var x= 0; x < scope.schedule.length; x++) {
          if (scope.lesson == scope.schedule[x].lesson) {
            scope.lessonDay = scope.schedule.weekday;
            element.css('text-decoration', 'line-through');
            return;

          }
        }
      });
    }

  };
});
