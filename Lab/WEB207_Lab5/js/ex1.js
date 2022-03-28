var app = angular.module("myApp", []);
app.controller("exam", function ($scope) {
    $scope.save = function () {
        $scope.$parent.students[$scope.$parent.index] = $scope.$parent.student;
    }
    $scope.edit = function (index) {
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
    $scope.cancel = function () {
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }
    $scope.$parent.students = [
        { fullname: "Nguyễn Hoàng Duy", birthday: "22/08/1999", mark: 10 },
        { fullname: "Nguyễn Hoàng Dũng", birthday: "07/07/1997", mark: 8 },
        { fullname: "Đào Bá Lộc", birthday: "10/10/1998", mark: 7 },
        { fullname: "Đinh Thị Tươi", birthday: "07/01/2000", mark: 9 },
        { fullname: "Trần Ngọc Hân", birthday: "17/05/1996", mark: 5 },
        { fullname: "Lê Thị Ái Nhi", birthday: "14/09/1997", mark: 7 },
        { fullname: "Nguyễn Đức Lợi", birthday: "10/08/2000", mark: 9 },
        { fullname: "Hồ Ngọc Danh", birthday: "26/10/1999", mark: 6 },
        { fullname: "Đặng Tiến Đạt", birthday: "30/01/2002", mark: 3 },
        { fullname: "Trần Ngọc Nhung", birthday: "24/09/2001", mark: 9 }
    ];
});