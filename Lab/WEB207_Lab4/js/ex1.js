var app = angular.module("myApp", []);
app.controller("myCtrl", myfunc);
function myfunc($scope) {
    $scope.titleapp = "THÔNG TIN SINH VIÊN";
    $scope.sv = {
        username: "duyplus",
        password: "gavkl123",
        fullname: "Nguyễn Hoàng Duy",
        email: "duynhps18293@fpt.edu.vn",
        gender: "true",
        birthday: "2022-03-12",
        schoolfee: "1500000",
        marks: "10"
    }
}