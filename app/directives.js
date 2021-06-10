(function () {
  "use strict";
  var mailApp = angular.module("mailComposeApp");
  var mailpattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  mailApp.directive("emailTags", [
    function () {
      return {
        require: "ngModel",
        restrict: "EA",
        scope: {
          mailid: "=ngModel",
        },
        template:
          '<div class="mailid">' +
          '<span class="to-id" >To:</span>' +
          '<div class="email" ng-repeat="mail in mailid track by $index">' +
          '<span class="mail-text">{{ mail }}</span>' +
          '<a ng-show="isEdit" class="mail-remove" ng-click="remove(mail)">x</a>' +
          "</div>" +
          '<div class="wemail" ng-repeat="mail in wrongmailid track by $index">' +
          '<span class="mail-text">{{ mail }}</span>' +
          '<a ng-show="isEdit" class="mail-remove" ng-click="remove(mail)">x</a>' +
          "</div>" +
          '<input class="text-box" ng-show="isEdit" type="text" name="email" id="mail-input" ng-model="mail" ' +
          'placeholder="sample@mail.com" ng-required="true"' +
          'ng-keyup="$event.keyCode == 188? add(mail) : null" ' +
          'ng-keypress="$event.keyCode == 13? add(mail) : null" ' +
          'ng-keydown="$event.keyCode == 8 ? removelast(mail) : null"/>' +
          "</div>",
        link: function (scope, element, attrs) {
          scope.isEdit = _.has(attrs.$attr, "edit");
          scope.add = function (mail) {
            mail = mail.replace(",", "");
            if (!_.isArray(scope.mailid)) scope.mailid = [];
            if (!_.isArray(scope.wrongmailid)) scope.wrongmailid = [];
            if (mail) {
              var check = mail.match(mailpattern);
              if (check != null) {
                scope.mailid.push(mail);
              } else {
                scope.wrongmailid.push(mail);
              }
            }

            scope.mail = "";
          };
          scope.remove = function (mail) {
            scope.mailid = _.without(scope.mailid, mail);
            scope.wrongmailid = _.without(scope.wrongmailid, mail);
          };
          scope.removelast = function (mail) {
            if (!mail) {
              if (scope.wrongmailid.length <= 0) {
                scope.mailid.pop();
              }
              scope.wrongmailid.pop();
            }
          };
        },
      };
    },
  ]);

  mailApp.directive("ccTags", [
    function () {
      return {
        require: "ngModel",

        restrict: "EA",
        scope: {
          ccmails: "=ngModel",
        },
        template:
          '<div class="mailid">' +
          '<span class="to-id" >cc:</span>' +
          '<div class="email" ng-repeat="mail in ccmails track by $index">' +
          '<span class="ccmail-text" ng-pattern="mailpattern">{{ mail }}</span>' +
          '<a ng-show="ccEdit" class="mail-remove" ng-click="remove(mail)">x</a>' +
          "</div>" +
          '<div class="wemail" ng-repeat="mail in wrongccmails track by $index">' +
          '<span class="mail-text">{{ mail }}</span>' +
          '<a ng-show="ccEdit" class="mail-remove" ng-click="remove(ccmail)">x</a>' +
          "</div>" +
          '<input ng-show="ccEdit" type="text" id="ccmail-input" ng-model="ccmail" ' +
          'placeholder="..."' +
          'ng-keyup="$event.keyCode == 188? add(ccmail) : null" ' +
          'ng-keypress="$event.keyCode == 13 ? add(ccmail) : null" ' +
          'ng-keydown="$event.keyCode == 8 ? removelast(ccmail) : null"/>',
        link: function (scope, element, attrs) {
          scope.ccEdit = _.has(attrs.$attr, "edit");
          scope.add = function (mail) {
            mail = mail.replace(",", "");

            if (!_.isArray(scope.ccmails)) scope.ccmails = [];
            if (!_.isArray(scope.wrongccmails)) scope.wrongccmails = [];
            var check = mail.match(mailpattern);
            if (check != null) {
              scope.ccmails.push(mail);
            } else {
              scope.wrongccmails.push(mail);
            }
            scope.ccmail = "";
          };
          scope.remove = function (mail) {
            scope.ccmails = _.without(scope.ccmails, mail);
          };
          scope.removelast = function (mail) {
            if (!mail) {
              if (scope.wrongccmails.length <= 0) {
                scope.ccmails.pop();
              }
              scope.wrongccmails.pop();
            }
          };
        },
      };
    },
  ]);

  mailApp.directive("bccTags", [
    function () {
      return {
        require: "ngModel",

        restrict: "EA",
        scope: {
          bccmails: "=ngModel",
        },

        template:
          '<div class="mailid">' +
          '<span class="to-id" >bcc : </span>' +
          '<div class="email" ng-repeat="mail in bccmails track by $index">' +
          '<span class="mail-text" ng-pattern="mailpattern">{{ mail }}</span>' +
          '<a ng-show="bccEdit" class="mail-remove" ng-click="remove(bccmail)">x</a>' +
          "</div>" +
          '<div class="wemail" ng-repeat="mail in wrongbccmails track by $index">' +
          '<span class="mail-text">{{ mail }}</span>' +
          '<a ng-show="bccEdit" class="mail-remove" ng-click="remove(bccmail)">x</a>' +
          "</div>" +
          '<input ng-show="bccEdit" type="text" id="bccmail-input" ng-model="bccmail" ' +
          'placeholder="..."' +
          'ng-keyup="$event.keyCode == 188? add(bccmail) : null" ' +
          'ng-keypress="$event.keyCode == 13 ? add(bccmail) : null" ' +
          'ng-keydown="$event.keyCode == 8 ? removelast(bccmail) : null"/>',
        link: function (scope, element, attrs) {
          scope.bccEdit = _.has(attrs.$attr, "edit");

          console.log(scope.bccEdit);
          scope.add = function (mail) {
            mail = mail.replace(",", "");
            if (!_.isArray(scope.bccmails)) scope.bccmails = [];
            if (!_.isArray(scope.wrongbccmails)) scope.wrongbccmails = [];
            var check = mail.match(mailpattern);
            if (check != null) {
              scope.bccmails.push(mail);
            } else {
              scope.wrongbccmails.push(mail);
            }
            scope.bccmail = "";
          };
          scope.remove = function (mail) {
            scope.mailid = _.without(scope.bccmails, mail);
          };
          scope.removelast = function (mail) {
            if (!mail) {
              if (scope.wrongbccmails.length <= 0) {
                scope.bccmails.pop();
              }
              scope.wrongbccmails.pop();
            }
          };
        },
      };
    },
  ]);
  mailApp.directive("fileModel", [
    "$parse",
    function ($parse) {
      return {
        restrict: "A",
        link: function (scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;

          element.bind("change", function () {
            scope.$apply(function () {
              modelSetter(scope, element[0].files[0]);
            });
          });
        },
      };
    },
  ]);
  mailApp.directive("ngFileModel", [
    "$parse",
    function ($parse) {
      return {
        restrict: "A",
        link: function (scope, element, attrs) {
          var model = $parse(attrs.ngFileModel);
          var isMultiple = attrs.multiple;
          var modelSetter = model.assign;
          element.bind("change", function () {
            var values = [];
            angular.forEach(element[0].files, function (item) {
              var value = {
                // File Name
                name: item.name,
                //File Size
                size: item.size,
                //File URL to view
                url: URL.createObjectURL(item),
                // File Input Value
                _file: item,
              };
              values.push(value);
            });
            scope.$apply(function () {
              if (isMultiple) {
                modelSetter(scope, values);
              } else {
                modelSetter(scope, values[0]);
              }
            });
          });
        },
      };
    },
  ]);
})();
