var app = angular.module("LabSPA", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/thethao", { templateUrl: "./pages/hiendstin.html", controller: "thethao" })
        .when("/suckhoe", { templateUrl: "./pages/hiendstin.html", controller: "suckhoe" })
        .when("/sanpham", { templateUrl: "./pages/hiensanpham.html", controller: "sanpham" })
        .otherwise({ template: "<h3>Đây là trang chủ</h3>" })
});

app.controller("thethao", function ($scope, $http, $rootScope) {
    $scope.listtin = [];
    $scope.pageSize = 5;
    $scope.start = 0;
    $scope.sx = "-Ngay";
    $http.get("js/tin/thethao.js").then(
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

app.controller("suckhoe", function ($scope, $http, $rootScope) {
    $scope.listtin = [];
    $scope.pageSize = 5;
    $scope.start = 0;
    $scope.sx = "-Ngay";
    $http.get("js/tin/suckhoe.js").then(
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

app.controller("sanpham", function ($scope, $http) {
    $scope.products = [];
    $scope.pageSize = 8;
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