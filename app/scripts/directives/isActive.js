'use strict';

angular.module('catticsApp')
  .directive('isActive', function ($location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var path = $location.path();
        var route = attrs.isActive;

        if (path === route) {
          element[0].className += ' active';
        }
      }
    };
  });
