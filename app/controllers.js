(function () {
  "use strict";
  var mailApp = angular.module("mailComposeApp");

  function locationreload() { 
  
    // To reload the entire page from the server
    location.reload();       
    }
  mailApp.controller("mainController", [
    "$scope",
    function ($scope) {
   
      $scope.showccbtn = true;
      $scope.showbccbtn = true;
      $scope.showCc = false;
      $scope.showBcc = false;
      $scope.ccFunction = function () {
        $scope.showccbtn = false;
        $scope.showCc = true;
      };
      $scope.bccFunction = function () {
        $scope.showBcc = true;
        $scope.showbccbtn = false;
      };
    },
  ]);
  mailApp.controller("attachController", [
    "$scope",
    "fileUpload",
    function ($scope, fileUpload) {
      $scope.user = {};
      $scope.click = function () {
        setTimeout(function () {
          document.getElementById("fileupload").click();
        }, 0);
      };
      $scope.submit = function () {
        alert("Mail sent")
        locationreload();
        // console.log("file is ");
        // console.log($scope.myFile.name);
      };
    },
  ]);
})();
