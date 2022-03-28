var app = angular.module("LabSPA", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", { template: "<h3>Đây là trang chủ</h3>" })
        .when("/:ten", { templateUrl: "./pages/hiendstin.html", controller: "hientin" })
})
app.controller("hientin", function ($scope, $http, $routeParams) {
    $scope.listtin = [];
    $scope.pageSize = 5;
    $scope.start = 0;
    $scope.sx = "-Ngay";
    var tenfile = $routeParams.ten;
    $http.get("js/tin/" + tenfile + ".js").then(
        function (r) {
            $scope.listtin = r.data;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );

    $scope.sortBy = function (what) {
        $scope.sx = what;
    }
    $scope.first = function () { $scope.start = 0; }
    $scope.prev = function () {
        if ($scope.start > 0) {
            $scope.start -= $scope.pageSize;
        }
    }
    $scope.next = function () {
        if ($scope.start < $scope.listtin.length - $scope.pageSize) {
            $scope.start += $scope.pageSize;
        }
    }
    $scope.last = function () {
        var page = Math.ceil($scope.listtin.length / $scope.pageSize);
        $scope.start = (page - 1) * $scope.pageSize;
    }
});