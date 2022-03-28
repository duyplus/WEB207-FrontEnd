var app = angular.module("myApp", []);
app.controller("myctrl", function ($scope) {
    $scope.index = 0;
    $scope.list = theloai;
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.tlhientai = angular.copy($scope.list[index]);
    }
    $scope.save = function () {
        $scope.list[$scope.index] = angular.copy($scope.tlhientai);
    }
    $scope.clear = function () {
        $scope.tlhientai = {};
        $scope.index = -1;
    }
    $scope.listuser = [
        { phutrach: "thihoai", hoten: "Thi Hoài" },
        { phutrach: "huahoai", hoten: "Hứa Hoài" },
        { phutrach: "hoangduy", hoten: "Hoàng Duy" },
        { phutrach: "phamkyluat", hoten: "Phạm Kỹ Luật" }
    ];
})