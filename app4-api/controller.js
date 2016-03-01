angular.module('myApp').controller('myCtrl', function($scope, svc){
  svc.getPeople().then(function(people){
    $scope.people = people.results;

    console.log(people)
  })

})
