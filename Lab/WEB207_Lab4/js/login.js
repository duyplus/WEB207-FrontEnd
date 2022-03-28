var app = angular.module("myApp", []);
app.controller("frm", myfunc);
function myfunc($scope) {
    $scope.list = listsv;
    $scope.login = function (sv) {
        var user = sv.username;
        var pass = sv.password;
        for (var i = 0; i < $scope.list.length; i++) {
            var std = $scope.list[i];
            if (user != std.username && pass != std.password) {
                document.getElementById("msg").innerHTML = "Nhập sai tài khoản hoặc mật khẩu!";
            } else if (user == std.username && pass == std.password) {
                sessionStorage.setItem("username", std.username);
                sessionStorage.setItem("fullname", std.fullname);
                sessionStorage.setItem("email", std.email);
                document.location = "index.html";
                document.getElementById("msg").innerHTML = "Đăng nhập thành công!";
                alert("Đăng nhập thành công!");
                break;
            }
        }
    }
}