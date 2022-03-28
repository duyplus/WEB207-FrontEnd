var app = angular.module("myApp", []);
app.controller("showCalc", calc);
function calc($scope) {
    $scope.tinhtoan = function () {
        var a = parseFloat($scope.length);
        var b = parseFloat($scope.width);
        $scope.dientich = a * b;
        $scope.chuvi = (a + b) * 2;
    }
    $scope.random = function () {
        var w1 = Math.round(Math.random() * 100);
        var w2 = Math.round(Math.random() * 100);
        $scope.width = w1;
        $scope.length = w2;
    }
}