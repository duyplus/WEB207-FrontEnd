var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope, $http) {
    $scope.products = [];
    $scope.pageSize = 10;
    $scope.start = 0;
    $scope.sx = "-price";
    $http.get("js/prods.js").then(
        function (r) {
            $scope.products = r.data;
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
        if ($scope.start < $scope.products.length - $scope.pageSize) {
            $scope.start += $scope.pageSize;
        }
    }
    $scope.last = function () {
        var page = Math.ceil($scope.products.length / $scope.pageSize);
        $scope.start = (page - 1) * $scope.pageSize;
    }

});

app.filter("percentage", function ($filter) {
    return function (input, decimals) {
        return $filter("number")(input * 100, decimals) + '%';
    };
})