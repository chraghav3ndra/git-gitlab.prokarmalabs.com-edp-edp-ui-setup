(function(){
  "use strict";

  angular
    .module("edpApp")
    .controller("HomeController", HomeController);

  HomeController.$inject = ["$scope"];

  /**
   * HomeController
   */
  function HomeController($scope){
    var vm = this;

    /* initialize */
    _init();
    
    /*
     *
     */
    function _init(){

    }
  }
})()
