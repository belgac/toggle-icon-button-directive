angular.module('toggleIconButton.directive', ['toggleIconButton.controller','toggleIconButton.template'])
  .directive('toggleiconbutton', toggleIconButton);

function toggleIconButton($templateCache) {

  var directive = {
    restrict: 'E',
    scope:{
      active: '=',
      inactive: '=',
      actualState: '=',
      action: '&'
    },
    controller:'toggleIconButtonController',
    controllerAs:'toggleIconButton',
    bindToController: true,
    template: $templateCache.get('toggleIconButton.view.html')
  };
  
  return directive;
}