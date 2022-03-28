var app = angular.module("myApp", []);
app.controller("show", profile);
function profile($scope) {
    $scope.save = function () {
        var a = parseFloat($scope.student.mark);
        if (a < 5) {
            $scope.student.grade = "Trượt";
        } else {
            $scope.student.grade = "Đạt";
        }
    }
}