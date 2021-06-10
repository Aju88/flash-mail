(function () {
  "use strict";
  var mailApp = angular.module("mailComposeApp");

  mailApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        for(var key in file)
        fd.append(key, file[key]);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
            
        })

        // .then(function(){
        //     console.log('not working');
        // })
        // .then(function(){
        //     console.log("not work");  
        // });
    }
}]);
})();
