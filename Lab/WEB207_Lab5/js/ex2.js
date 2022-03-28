var app = angular.module("myApp", []);
app.controller("crud", function ($scope) {
    $scope.student = {};
    $scope.index = -1;

    $scope.edit = function (chiso) {
        $scope.index = chiso;
        $scope.student = angular.copy($scope.students[chiso]);
    }
    $scope.insert = function () {
        $scope.students.push(angular.copy($scope.student));
        $scope.clear();
    }
    $scope.update = function () {
        $scope.students[$scope.index] = angular.copy($scope.student);
    }
    $scope.delete = function () {
        $scope.students.splice($scope.index, 1);
        $scope.clear();
    }
    $scope.cancel = function () {
        if ($scope.index == -1) {
            $scope.clear();
        } else {
            $scope.edit($scope.index);
        }
    }
    $scope.clear = function () {
        $scope.student = {};
        $scope.index = -1;
    }
    $scope.students = [
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