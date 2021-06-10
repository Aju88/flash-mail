(function () {
  "use strict";
  var mailApp = angular.module("mailComposeApp");

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
    "$timeout",
    "fileUpload",
    function ($scope, $timeout, fileUpload) {
      $scope.user = {};
      $scope.click = function () {
        setTimeout(function () {
          document.getElementById("fileupload").click();
        }, 0);
      };
      $scope.submit = function () {
     
        var uploadUrl = "/upload";
        fileUpload.uploadFileToUrl($scope.user, uploadUrl);

        // console.log("file is ");
        // console.log($scope.myFile.name);
      };
    },
  ]);
})();
