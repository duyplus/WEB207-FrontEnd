var app = angular.module("myApp", []);
app.controller("myCtrl", myfunc);
function myfunc($scope) {
    $scope.titleapp = "THÔNG TIN SINH VIÊN";
    $scope.users = [
        {
            "username": "duyplus",
            "password": "gavkl123",
            "fullname": "Nguyễn Hoàng Duy",
            "email": "duynhps18293@fpt.edu.vn",
            "gender": "true",
            "birthday": "1999-08-22",
            "schoolfee": "1500000",
            "marks": "0"
        }, {
            "username": "teonv",
            "password": "123456",
            "fullname": "Nguyễn Văn Tèo",
            "email": "teonv@fpt.edu.vn",
            "gender": "true",
            "birthday": "1991-03-12",
            "schoolfee": "2500000",
            "marks": "0"
        }, {
            "username": "nott",
            "password": "123",
            "fullname": "Trần Thì Nở",
            "email": "nott@fpt.edu.vn",
            "gender": "false",
            "birthday": "1994-12-04",
            "schoolfee": "2000000",
            "marks": "0"
        }
    ]
    $scope.nhantu = ["Nhường nhịn", "Khiêm tốn", "Trọng người", "Thương vật"];
}