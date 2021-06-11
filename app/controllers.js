(function () {
  "use strict";
  var mailApp = angular.module("mailComposeApp");

  function locationreload() {
    location.reload();    // To reload the entire page
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
    function ($scope) {
      $scope.user = {};
      $scope.removeAttach = function (file) {
        const index = $scope.files.indexOf(file);
        $scope.files.splice(index, 1);
      };
      $scope.click = function () {
        setTimeout(function () {
          document.getElementById("fileupload").click();
        }, 0);
      };
      $scope.submit = function () {
        alert("Mail sent");
        locationreload();
      };
    },
  ]);
})();
