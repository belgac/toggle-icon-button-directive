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
}