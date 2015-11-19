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
toggleIconButton.$inject = ["$templateCache"];;
angular.module('toggleIconButton.controller', [])
  .controller('toggleIconButtonController', toggleIconButtonController);
function toggleIconButtonController () {
 var vm = this;
  setState();
  function setState () {
    if (vm.actualState === true) {
      vm.state = vm.active;
    } else {
     vm.state = vm.inactive; 
    }
  }
 vm.click = function(){
   vm.actualState=!vm.actualState;
   vm.action();
   setState();
 }
};
angular.module("toggleIconButton.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("toggleIconButton.view.html","{{toggleIconButton}}\n<button ng-class=\"toggleIconButton.state.button\" ng-click=\"toggleIconButton.click()\"><i ng-class=\"toggleIconButton.state.icon\"></i> {{toggleIconButton.state.text}}</button>");}]);
//# sourceMappingURL=toggle-icon-button-directive.js.map
