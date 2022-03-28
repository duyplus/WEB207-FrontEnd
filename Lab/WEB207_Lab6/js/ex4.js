var app = angular.module("myapp", []);
app.directive("polyNumber", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attr, mCtrl) {
            mCtrl.$parsers.push(function (value) {
                var number = parseInt(value);
                if (number % 2 == 0 && number % 9 == 0) {
                    mCtrl.$setValidity('charE', true);
                }
                else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            });
        }
    }
});
app.controller("myctrl", function ($scope) {

})