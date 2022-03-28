var app = angular.module("LabSPA", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/thethao", { templateUrl: "./pages/tinthethao.html" })
        .when("/giaoduc", { templateUrl: "./pages/tingiaoduc.html" })
        .when("/xahoi", { templateUrl: "./pages/tinxahoi.html" })
        .when("/thohay", { templateUrl: "./pages/thohay.html" })
        .otherwise({ template: "<h3>Đây là trang chủ</h3>" })
});