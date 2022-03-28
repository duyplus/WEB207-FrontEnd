// controllers
app.controller("ctrlHome", function ($scope) {
    $scope.course = [
        {
            Id: "HTCS",
            Name: "HTML5 và CSS3",
            Logo: "HTCS.svg",
        },
        {
            Id: "JSPR",
            Name: "Lập trình JavaScript",
            Logo: "JSPR.svg",
        },
        {
            Id: "DBAV",
            Name: "SQL Server",
            Logo: "DBAV.svg",
        },
        {
            Id: "JAAV",
            Name: "Java nâng cao",
            Logo: "JAAV.svg",
        },
        {
            Id: "INMA",
            Name: "Internet Marketing",
            Logo: "INMA.svg",
        },
        {
            Id: "ASNE",
            Name: "Lập trình ASP.NET",
            Logo: "ASNE.svg",
        },
        {
            Id: "CLCO",
            Name: "Điện toán đám mây",
            Logo: "CLCO.svg",
        },
        {
            Id: "DBBS",
            Name: "Cơ sở dữ liệu",
            Logo: "DBBS.svg",
        },
    ];
});
