var app = angular.module("myApp", []);
app.controller("myctrl", myfunc);
function myfunc($scope) {
    $scope.start = 0;
    $scope.listtheloai = theloai;
    $scope.listtin = list;
    $scope.truoc = function () {
        if ($scope.start == 0) {
            return;
        } else {
            $scope.start -= 3;
        }
    }
    $scope.sau = function () {
        if ($scope.start == $scope.listtin.length) {
            alert("Đã xem hết tin tức!");
        }
        if ($scope.start < $scope.listtin.length - 1) {
            $scope.start += 3;
        } else {
            return;
        }
    }
}