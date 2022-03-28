var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope, $http) {
    $scope.products = [];
    $scope.rate = 23000;
    $http.get("js/prods.js").then(
        function (r) {
            $scope.products = r.data;
        },
        function (d) {
            alert('Lỗi: ' + d.statusText);
        }
    );
});

app.filter("percentage", function ($filter) {
    return function (input, decimals) {
        return $filter("number")(input * 100, decimals) + '%';
    };
})
