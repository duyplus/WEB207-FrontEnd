var app = angular.module("myapp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $http) {
    $scope.subjects = [];
    $http.get("js/monhoc.js").then(
        function (r) {
            $scope.subjects = r.data;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );
})