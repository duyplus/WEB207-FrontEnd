var app = angular.module("myApp", []);
app.controller("showInfo", function ($scope) {
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
    $scope.$parent.products = [
        { name: "Đồng hồ Thuỵ Sỹ", image: "1.jpg", price: 1100 },
        { name: "Đồng hồ Casio", image: "2.jpg", price: 1200 },
        { name: "Máy tính Dell", image: "3.jpg", price: 1300 },
        { name: "Máy tính HP", image: "4.jpg", price: 1400 },
        { name: "Máy ảnh Panasonic", image: "5.jpg", price: 1500 },
        { name: "Máy tính Acus", image: "6.jpg", price: 1600 },
        { name: "Mũ vành rộng", image: "7.jpg", price: 1700 },
        { name: "Máy tính MSI", image: "8.jpg", price: 1800 },
        { name: "Nhẫn mỹ ký", image: "9.jpg", price: 1900 },
        { name: "Vali", image: "10.jpg", price: 1100 },
        { name: "Điện thoại BlackBerry", image: "11.jpg", price: 800 },
        { name: "Điện thoại LC", image: "12.jpg", price: 700 }
    ];
});