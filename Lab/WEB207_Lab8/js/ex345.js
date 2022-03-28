var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/gioithieu", { templateUrl: "gioithieu.html" })
        .when("/lienhe", { templateUrl: "lienhe.html" })
        .when("/tracnghiem/:idMH/:tenMH", { templateUrl: "tracnghiem.html", controller: "tnctrl" })
        .otherwise({ template: "<h3>Chào bạn - Hello </h3>" })
});

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
});

app.controller("tnctrl", function ($scope, $http, $routeParams) {
    $scope.cauhoi = [];
    $scope.idMH = $routeParams.idMH;
    $scope.tenMH = $routeParams.tenMH;
    $http.get("js/db/" + $scope.idMH + ".js").then(
        function (r) {
            $scope.cauhoi = r.data;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );
});