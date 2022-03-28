var app = angular.module("myApp", []);
app.controller("myctrl", function ($scope, $http) {
    var today = new Date();
    $scope.homnay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    $scope.sanpham = [];
    $http.get("js/sanpham.js").then(
        function (r) {
            $scope.sanpham = r.data;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );

    $scope.tongTien = function () {
        var amount = 0;
        for (var i = 0; i < $scope.sanpham.length; i++) {
            if ($scope.sanpham[i].buy) {
                amount += $scope.sanpham[i].price * $scope.sanpham[i].quantity;
            }
        }
        return numberWithCommas(amount);
    }

    $scope.khuyenMai = function (sl) {
        if (sl >= 15) return 100000;
        else if (sl >= 10) return 60000;
        else if (sl >= 5) return 20000;
        else return 0;
    }
});

function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}