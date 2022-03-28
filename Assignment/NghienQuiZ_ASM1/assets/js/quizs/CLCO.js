// QUIZZ

app.controller("ctrlCLCO", function ($scope) {
    $scope.title = "Điện toán đám mây";
    $scope.src = [
        {
            Id: 24661,
            Text: "Dịch vụ Amazon Elastic Compute Cloud có chức năng chính là gì?",
            Marks: 1,
            AnswerId: 102331,
            Answers: [
                { Id: 102331, Text: "Hỗ trợ lưu trữ web" },
                { Id: 102332, Text: "Hỗ trợ cập nhật dữ liệu" },
                { Id: 102333, Text: "Hỗ trợ thay đổi kiến trúc mô hình cloud" },
                { Id: 102334, Text: "Hỗ trợ truy xuất dữ liệu" },
            ],
        },
        {
            Id: 24662,
            Text: "Câu nào là đúng đối với UDDI?",
            Marks: 1,
            AnswerId: 102337,
            Answers: [
                { Id: 102335, Text: "UDDI là cách viết khác của WSDL" },
                { Id: 102336, Text: "UDDI tương tự như WSDL" },
                {
                    Id: 102337,
                    Text: "UDDI cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web.",
                },
                {
                    Id: 102338,
                    Text: "UDDI không cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web, nó chỉ được thực hiện qua WSDL",
                },
            ],
        },
        {
            Id: 24663,
            Text: "Câu nào là đúng đối với WSDL?",
            Marks: 1,
            AnswerId: 102339,
            Answers: [
                {
                    Id: 102339,
                    Text: "WSDL Cho phép các nhà phát triển ghi thông tin dịch vụ web",
                },
                {
                    Id: 102340,
                    Text: "WSDL kết nối trực tiếp với cơ sở dữ liệu SQLite và trả về kết quả cho người dùng",
                },
                { Id: 102341, Text: "WSDL là cầu nối giữa người sử dụng với Database" },
                {
                    Id: 102342,
                    Text: "WSDL không cho phép các nhà phát triển ghi thông tin dịch vụ web",
                },
            ],
        },
        {
            Id: 24664,
            Text: "WSDL là viết tắt của cụm từ nào?",
            Marks: 1,
            AnswerId: 102345,
            Answers: [
                { Id: 102343, Text: "Width Server Description Language" },
                { Id: 102344, Text: "Width Services Description Language" },
                { Id: 102345, Text: "Web Services Description Language" },
                { Id: 102346, Text: "Web Server Description Language" },
            ],
        },
        {
            Id: 24665,
            Text: "API là viết tắt của cụm từ nào?",
            Marks: 1,
            AnswerId: 102349,
            Answers: [
                { Id: 102347, Text: "Application Private Interface" },
                { Id: 102348, Text: "Application Programming Internet" },
                { Id: 102349, Text: "Application Programming Interface" },
                { Id: 102350, Text: "Application Public Interface" },
            ],
        },
        {
            Id: 24666,
            Text: "Câu nào là đúng đối với API?",
            Marks: 1,
            AnswerId: 102351,
            Answers: [
                {
                    Id: 102351,
                    Text: "API cho phép các chương trình sử dụng có thể giao tiếp với nhau mà không cần sự tham gia của người dùng",
                },
                { Id: 102352, Text: "API bản chất là một webserver" },
                {
                    Id: 102353,
                    Text: "Để giao tiếp các chương trình sử dụng API nhất thiết phải có sự tham gia của người dùng",
                },
                { Id: 102354, Text: "API bản chất là một không gian lưu trữ web" },
            ],
        },
        {
            Id: 24667,
            Text: "Câu nào là đúng đối với SOAP?",
            Marks: 1,
            AnswerId: 102357,
            Answers: [
                { Id: 102355, Text: "Sử dụng để mã hóa thông điệp HTML" },
                { Id: 102356, Text: "Sử dụng để duy trì kết nối internet" },
                { Id: 102357, Text: "Sử dụng để mã hóa thông điệp XML" },
                { Id: 102358, Text: "Sử dụng để mã hóa CSS" },
            ],
        },
        {
            Id: 24668,
            Text: "Câu nào là đúng đối với API?",
            Marks: 1,
            AnswerId: 102362,
            Answers: [
                { Id: 102359, Text: "API là một file thư viện dạng dll" },
                { Id: 102360, Text: "API là một file thực thi dạng exe" },
                {
                    Id: 102361,
                    Text: "API không cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ",
                },
                {
                    Id: 102362,
                    Text: "API cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ",
                },
            ],
        },
        {
            Id: 24669,
            Text: "AJAX sử dụng công nghệ nào?",
            Marks: 1,
            AnswerId: 102364,
            Answers: [
                { Id: 102363, Text: "Sử dụng các công nghệ GSM, CDMA, CSS" },
                { Id: 102364, Text: "Sử dụng các công nghệ XHTML, CSS, JSON" },
                { Id: 102365, Text: "Chỉ sử dụng duy nhất công nghệ CDMA" },
                {
                    Id: 102366,
                    Text: "Sử dụng các công nghẹ XHTML, CMS, CRM, HTML, CSS",
                },
            ],
        },
        {
            Id: 24670,
            Text: "Bất lợi của AJAX là gì?",
            Marks: 1,
            AnswerId: 102370,
            Answers: [
                {
                    Id: 102367,
                    Text: "Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi",
                },
                { Id: 102368, Text: "Phải sử dụng nhiều đoạn kịch bản PHP" },
                { Id: 102369, Text: "Phải sử dụng nhiều doạn kịch bản JavaScript" },
                { Id: 102370, Text: "Không hiển thị lịch sử truy cập" },
            ],
        },
        {
            Id: 24671,
            Text: "Dịch vụ nào được MobileMe cung cấp?",
            Marks: 1,
            AnswerId: 102372,
            Answers: [
                { Id: 102371, Text: "post" },
                { Id: 102372, Text: "push" },
                { Id: 102373, Text: "move" },
                { Id: 102374, Text: "Get" },
            ],
        },
        {
            Id: 24672,
            Text: "MobileMe là giải pháp của công ty nào?",
            Marks: 1,
            AnswerId: 102378,
            Answers: [
                { Id: 102375, Text: "Microsoft" },
                { Id: 102376, Text: "Google" },
                { Id: 102377, Text: "IBM" },
                { Id: 102378, Text: "Apple" },
            ],
        },
        {
            Id: 24673,
            Text: "Dịch vụ Live Mesh là của công ty nào?",
            Marks: 1,
            AnswerId: 102380,
            Answers: [
                { Id: 102379, Text: "Yahoo" },
                { Id: 102380, Text: "Microsoft" },
                { Id: 102381, Text: "IBM" },
                { Id: 102382, Text: "Apple" },
            ],
        },
        {
            Id: 24674,
            Text: "Điều nào sau đây đúng về Live Framework?",
            Marks: 1,
            AnswerId: 102384,
            Answers: [
                {
                    Id: 102383,
                    Text: "Live Framework là một thư mục chia sẻ, tương tác với các thành phần trong hệ điều hành",
                },
                {
                    Id: 102384,
                    Text: "Live Framework là một API cho phép truy cập các dịch vụ Live Mesh trên HTTP",
                },
                { Id: 102385, Text: "Live Framework là một file" },
                { Id: 102386, Text: "Live Framework là một hệ điều hành" },
            ],
        },
        {
            Id: 24675,
            Text: "SDN là viết tắt của cụm từ nào?",
            Marks: 1,
            AnswerId: 102390,
            Answers: [
                { Id: 102387, Text: "Storage Develop Network" },
                { Id: 102388, Text: "Small Delivery Network" },
                { Id: 102389, Text: "Small Delivery Networking" },
                { Id: 102390, Text: "Storage Delivery Network" },
            ],
        },
        {
            Id: 24676,
            Text: "Live Mesh có sẵn trong hệ điều hành nào?",
            Marks: 1,
            AnswerId: 102391,
            Answers: [
                { Id: 102391, Text: "Có trong windows XP, windows Vista" },
                { Id: 102392, Text: "Có trong MS-DOS" },
                { Id: 102393, Text: "Có trong fedora" },
                { Id: 102394, Text: "Có trong Ubuntu" },
            ],
        },
        {
            Id: 24677,
            Text: "Điều nào sau đây đúng về dịch vụ S3?",
            Marks: 1,
            AnswerId: 102396,
            Answers: [
                {
                    Id: 102395,
                    Text: "Là dịch vụ hỗ trợ truy xuất dữ liệu trên cloud nhưng không hỗ trợ lưu trữ",
                },
                { Id: 102396, Text: "Là dịch vụ lưu trữ trên cloud" },
                { Id: 102397, Text: "Là dịch vụ hủy dữ liệu từ cloud" },
                { Id: 102398, Text: "Là dịch vụ copy dữ liệu giữa 2 máy client" },
            ],
        },
        {
            Id: 24678,
            Text: "MobileMe iDisk dùng để quản lý điều gì?",
            Marks: 1,
            AnswerId: 102402,
            Answers: [
                { Id: 102399, Text: "Quản lý thiết bị hỗ trợ bảo mật vân tay" },
                { Id: 102400, Text: "Quản lý ổ đĩa cứng" },
                { Id: 102401, Text: "Quản lý các ứng dụng" },
                { Id: 102402, Text: "Quản lý tập tin hỗ trợ kéo thả" },
            ],
        },
        {
            Id: 24679,
            Text: "Dịch vụ S3 cung cấp cho khách hàng sử dụng giao thức nào?",
            Marks: 1,
            AnswerId: 102406,
            Answers: [
                { Id: 102403, Text: "TCP" },
                { Id: 102404, Text: "UDP" },
                { Id: 102405, Text: "UDP, TCP, REST, SOAP" },
                { Id: 102406, Text: "REST và SOAP" },
            ],
        },
        {
            Id: 24680,
            Text: "Hãy cho biết đâu là tính năng chính của dịch vụ S3?",
            Marks: 1,
            AnswerId: 102410,
            Answers: [
                { Id: 102407, Text: "Ghi đọc xóa dữ liệu trên máy client" },
                { Id: 102408, Text: "Chỉ hỗ trợ tính năng Xóa dữ liệu" },
                { Id: 102409, Text: "Di chuyển dữ liệu" },
                { Id: 102410, Text: "Ghi dữ liệu, đọc, xóa dữ liệu" },
            ],
        },
        {
            Id: 24681,
            Text: "Dịch vụ Office Live Small Business phù hợp với doanh nghiệp nào?",
            Marks: 1,
            AnswerId: 102411,
            Answers: [
                { Id: 102411, Text: "Vừa và nhỏ" },
                { Id: 102412, Text: "Vừa" },
                { Id: 102413, Text: "Nhỏ" },
                { Id: 102414, Text: "Lớn" },
            ],
        },
        {
            Id: 24682,
            Text: "SaaS bao gồm các loại dịch vụ nào?",
            Marks: 1,
            AnswerId: 102418,
            Answers: [
                {
                    Id: 102415,
                    Text: "Business services và Customer-oriented services và soft services",
                },
                { Id: 102416, Text: "Business service" },
                {
                    Id: 102417,
                    Text: "Business services, Customer-oriented services, school services",
                },
                { Id: 102418, Text: "Business services và Customer-oriented services" },
            ],
        },
        {
            Id: 24683,
            Text: "Đây không phải là một lợi thế của mô hình SaaS",
            Marks: 1,
            AnswerId: 102420,
            Answers: [
                { Id: 102419, Text: "Dịch vụ SaaS cần ít chi phí nhất" },
                {
                    Id: 102420,
                    Text: "Saas hoàn toàn có thể sử dụng mà không cần dùng Internet",
                },
                { Id: 102421, Text: "SaaS hỗ trợ kiểm soát an toàn dữ liệu tốt" },
                {
                    Id: 102422,
                    Text: "SaaS có khả năng áp dụng các chuẩn mực về CNTT cho tất cả các khách hàng sử dụng, do đó tính đồng nhất cao",
                },
            ],
        },
        {
            Id: 24684,
            Text: "Dịch vụ nào thuộc SaaS?",
            Marks: 1,
            AnswerId: 102425,
            Answers: [
                { Id: 102423, Text: "Chỉ có Hotmail" },
                { Id: 102424, Text: "Chỉ có Gmail" },
                { Id: 102425, Text: "Gmail, Hotmail, Yahoo Mail" },
                { Id: 102426, Text: "Gmail, Hotmail, Yahoo Mail, Book Mail" },
            ],
        },
        {
            Id: 24685,
            Text: "Lợi ích của ảo hóa là gì?",
            Marks: 1,
            AnswerId: 102427,
            Answers: [
                {
                    Id: 102427,
                    Text: "Ảo hóa giúp bạn dễ dàng di chuyển đến một hệ thống SaaS",
                },
                {
                    Id: 102428,
                    Text: "Ảo hóa giúp bạn dễ dàng sử dụng phần mềm mà không cần SaaS",
                },
                { Id: 102429, Text: "Để ảo hóa sẽ cần 10 Server thật" },
                {
                    Id: 102430,
                    Text: "Ảo hóa giúp bạn kết nối với SaaS mà không cần internet",
                },
            ],
        },
        {
            Id: 24686,
            Text: "Điều nào sau đây đúng về SaaS?",
            Marks: 1,
            AnswerId: 102432,
            Answers: [
                {
                    Id: 102431,
                    Text: "Cần thiết phải quản lý cơ sở hạ tầng và nền tảng nó đang chạy",
                },
                {
                    Id: 102432,
                    Text: "Không cần quản lý cơ sở hạ tầng và nền tảng nó đang chạy",
                },
                {
                    Id: 102433,
                    Text: "Chỉ càn quản lý phần mềm đang chạy, không cần quản lý cơ sở hạ tầng",
                },
                {
                    Id: 102434,
                    Text: "Chỉ cần quản lý có sở hạ tầng, không cần quản lý phần mềm đang chạy",
                },
            ],
        },
        {
            Id: 24687,
            Text: "Google Calendar thuộc nhóm dịch vụ nào?",
            Marks: 1,
            AnswerId: 102438,
            Answers: [
                { Id: 102435, Text: "Google Apps Calendar Edition" },
                { Id: 102436, Text: "Google Apps Premier Edition" },
                { Id: 102437, Text: "Google Apps Premier Calendar" },
                { Id: 102438, Text: "Google Apps" },
            ],
        },
        {
            Id: 24688,
            Text: "Google Apps Premier Edition hỗ trợ cho mỗi user miễn phí bao nhiêu GB?",
            Marks: 1,
            AnswerId: 102439,
            Answers: [
                { Id: 102439, Text: "10GB" },
                { Id: 102440, Text: "5GB" },
                { Id: 102441, Text: "20GB" },
                { Id: 102442, Text: "100GB" },
            ],
        },
        {
            Id: 24689,
            Text: "SaaS là gì?",
            Marks: 1,
            AnswerId: 102445,
            Answers: [
                { Id: 102443, Text: "Là một ứng dụng trên Linux client" },
                { Id: 102444, Text: "Là một dịch vụ lưu trữ trên một máy client" },
                {
                    Id: 102445,
                    Text: "Là một ứng dụng lưu trữ trên một máy chủ từ xa và truy cập thông qua Internet",
                },
                {
                    Id: 102446,
                    Text: "Là một ứng dụng được lưu trữ trên Server Localhost",
                },
            ],
        },
        {
            Id: 24690,
            Text: "Đâu là dịch vụ SaaS của Google?",
            Marks: 1,
            AnswerId: 102450,
            Answers: [
                {
                    Id: 102447,
                    Text: "Google Apps Google Apps Premier Edition, Google List, Google Collection",
                },
                {
                    Id: 102448,
                    Text: "Google Apps Google Apps Premier Edition và Google List",
                },
                { Id: 102449, Text: "Google Apps và Google Apps Mobile Collection" },
                { Id: 102450, Text: "Google Apps và Google Apps Premier Edition" },
            ],
        },
        {
            Id: 24691,
            Text: "Nhược điểm của Google App Engine?",
            Marks: 1,
            AnswerId: 102452,
            Answers: [
                { Id: 102451, Text: "Không hỗ trợ Python" },
                { Id: 102452, Text: "Không hỗ trợ tốt về AJAX" },
                { Id: 102453, Text: "Không hỗ trợ tốt về HTML" },
                { Id: 102454, Text: "Không hỗ trợ tốt về XML" },
            ],
        },
        {
            Id: 24692,
            Text: "Google Gears làm việc với trình duyệt nào?",
            Marks: 1,
            AnswerId: 102456,
            Answers: [
                { Id: 102455, Text: "Safari" },
                { Id: 102456, Text: "Chrome, firefox, safari" },
                { Id: 102457, Text: "Chrome" },
                { Id: 102458, Text: "Firefox" },
            ],
        },
        {
            Id: 24693,
            Text: "Live Services là dịch vụ của thành phần nào sau đây?",
            Marks: 1,
            AnswerId: 102460,
            Answers: [
                { Id: 102459, Text: "Google Platform" },
                { Id: 102460, Text: "Azure Platform" },
                { Id: 102461, Text: "Window Plathform" },
                { Id: 102462, Text: "Apple Plathform" },
            ],
        },
        {
            Id: 24694,
            Text: "Điều nào sau đây đúng về Bungee Connect?",
            Marks: 1,
            AnswerId: 102465,
            Answers: [
                {
                    Id: 102463,
                    Text: "Tích hợp tự động các ứng dụng truyền thống chạy trên máy client",
                },
                {
                    Id: 102464,
                    Text: "Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (Oracle, ASP.NET)",
                },
                {
                    Id: 102465,
                    Text: "Tích hợp tự động các dịch vụ web (SOAP / REST) ​​và cơ sở dữ liệu (MySQL / PostgreSQL)",
                },
                { Id: 102466, Text: "Không tích hợp dịch vụ nào" },
            ],
        },
        {
            Id: 24695,
            Text: "Azure cho phép các nhà phát triển sử dụng framework nào?",
            Marks: 1,
            AnswerId: 102467,
            Answers: [
                { Id: 102467, Text: ".NET framework" },
                { Id: 102468, Text: "Google Framework" },
                { Id: 102469, Text: "Java Framework" },
                { Id: 102470, Text: "IBM framework" },
            ],
        },
        {
            Id: 24696,
            Text: "Google Gears hỗ trợ tạo các ứng dụng loại nào?",
            Marks: 1,
            AnswerId: 102474,
            Answers: [
                { Id: 102471, Text: "web online" },
                { Id: 102472, Text: "linux application" },
                { Id: 102473, Text: "window application" },
                { Id: 102474, Text: "web offline" },
            ],
        },
        {
            Id: 24697,
            Text: "Điều nào sau đây đúng về Microsoft SQL Services?",
            Marks: 1,
            AnswerId: 102475,
            Answers: [
                {
                    Id: 102475,
                    Text: "Có thể lưu trữ và lấy dữ liệu có cấu trúc và không có cấu trúc",
                },
                { Id: 102476, Text: "Có thể lưu trữ và lấy dữ liệu có cấu trúc" },
                { Id: 102477, Text: "Có thể lưu trữ và lấy dữ liệu không có cấu trúc" },
                { Id: 102478, Text: "Không thể lưu trữ dữ liệu" },
            ],
        },
        {
            Id: 24698,
            Text: "Công cụ nào của Google cho phép tạo ứng dụng trên Cloud?",
            Marks: 1,
            AnswerId: 102482,
            Answers: [
                { Id: 102479, Text: "Google Application Engine" },
                { Id: 102480, Text: "Google Calendar" },
                { Id: 102481, Text: "Gmail" },
                { Id: 102482, Text: "Google App Engine" },
            ],
        },
        {
            Id: 24699,
            Text: "Điều nào sau đây đúng cho Intuit QuickBase ?",
            Marks: 1,
            AnswerId: 102485,
            Answers: [
                {
                    Id: 102483,
                    Text: "Cho phép các thành viên sử dụng chuyên môn để tạo ra các ứng dụng phục vụ cho những người có chuyên môn kỹ thuật",
                },
                {
                    Id: 102484,
                    Text: "Cho phép các thành viên có chuyên môn tạo nên ứng dụng để phục vụ chính họ",
                },
                {
                    Id: 102485,
                    Text: "Cho phép các thành viên để tạo ra các ứng dụng phục vụ cho những người không có chuyên môn kỹ thuật",
                },
                {
                    Id: 102486,
                    Text: "Cho phép các thành viên không có chuyên môn tạo nên ứng dụng",
                },
            ],
        },
        {
            Id: 24700,
            Text: "Ngôn ngữ lập trình phổ biến trên đám mây của google là?",
            Marks: 1,
            AnswerId: 102487,
            Answers: [
                { Id: 102487, Text: "Java" },
                { Id: 102488, Text: "ASP" },
                { Id: 102489, Text: "C#" },
                { Id: 102490, Text: "VB.NET" },
            ],
        },
        {
            Id: 24701,
            Text: "Điều nào sau đây đúng về Ảo hóa?",
            Marks: 1,
            AnswerId: 102494,
            Answers: [
                { Id: 102491, Text: "Chia máy chủ vật lý thành 1 máy chủ ảo" },
                { Id: 102492, Text: "Chia máy chủ ảo thành nhiều máy chủ vật lý" },
                { Id: 102493, Text: "Chia máy chủ áo thành 1 máy chủ vật lý" },
                { Id: 102494, Text: "Chia máy chủ vật lý thành nhiều máy chủ ảo" },
            ],
        },
        {
            Id: 24702,
            Text: "BlueMix là gì?",
            Marks: 1,
            AnswerId: 102495,
            Answers: [
                {
                    Id: 102495,
                    Text: "Một nền tảng để chạy bất cứ ứng dụng nào trong các đám mây mà không cần phải lo lắng về phần cứng, phần mềm và mạng",
                },
                {
                    Id: 102496,
                    Text: "Là một thành phần của Microsoft Azure, cho phép tải các ứng dụng lên đám mây của Microsoft",
                },
                { Id: 102497, Text: "Do Amazon phát triển" },
                { Id: 102498, Text: "Do google phát triển" },
            ],
        },
        {
            Id: 24703,
            Text: "Đâu là đặc điểm của ảo hóa?",
            Marks: 1,
            AnswerId: 102500,
            Answers: [
                {
                    Id: 102499,
                    Text: "Tốn thời gian hơn việc cài đặt trên máy chủ vật lý",
                },
                { Id: 102500, Text: "Triển khai nhanh" },
                { Id: 102501, Text: "Tốn chi phí" },
                { Id: 102502, Text: "Triển khai chậm" },
            ],
        },
        {
            Id: 24704,
            Text: "Điều nào sau đây đúng về máy ảo?",
            Marks: 1,
            AnswerId: 102506,
            Answers: [
                { Id: 102503, Text: "Là ổ đĩa DVD-CD" },
                { Id: 102504, Text: "Là một hệ điều hành trên ổ đĩa" },
                { Id: 102505, Text: "Là ổ đĩa cứng" },
                { Id: 102506, Text: "Là một tập tin trên ổ đĩa" },
            ],
        },
        {
            Id: 24705,
            Text: "BlueMix thuộc loại nào trong các loại sau?",
            Marks: 1,
            AnswerId: 102509,
            Answers: [
                { Id: 102507, Text: "SaaS" },
                { Id: 102508, Text: "RaaS" },
                { Id: 102509, Text: "PaaS" },
                { Id: 102510, Text: "DaaS" },
            ],
        },
        {
            Id: 24706,
            Text: "Điểm khác biệt giữa Cloud VPS và VPS truyền thống ?",
            Marks: 1,
            AnswerId: 102513,
            Answers: [
                {
                    Id: 102511,
                    Text: "Ảo hóa VPS trên một server thay vì một cụm server duy nhất",
                },
                { Id: 102512, Text: "Ảo hóa VPS chỉ thực hiện trên 1 server" },
                {
                    Id: 102513,
                    Text: "Ảo hóa VPS trên một cụm server thay vì một server duy nhất",
                },
                { Id: 102514, Text: "Ảo hóa VPS chỉ thực hiện trên nhiều máy client" },
            ],
        },
        {
            Id: 24707,
            Text: "Meetup ảo là khái niệm của thành phần nào trong các thành phần sau?",
            Marks: 1,
            AnswerId: 102515,
            Answers: [
                { Id: 102515, Text: "Bluemix" },
                { Id: 102516, Text: "Azure" },
                { Id: 102517, Text: "Bluemix, Azure" },
                { Id: 102518, Text: "Google Site" },
            ],
        },
        {
            Id: 24708,
            Text: "Có thể tạo loại ứng dụng nào trên BlueMix?",
            Marks: 1,
            AnswerId: 102522,
            Answers: [
                { Id: 102519, Text: "Ứng dụng web" },
                {
                    Id: 102520,
                    Text: "Không cho phép tạo ứng dụng của riêng bạn mà chỉ cho phép bạn sử dụng",
                },
                { Id: 102521, Text: "ứng dụng mobile" },
                { Id: 102522, Text: "Cả ứng dụng web, mobile" },
            ],
        },
        {
            Id: 24709,
            Text: "DevOps Services là dịch vụ của thành phần nào trong các thành phần sau?",
            Marks: 1,
            AnswerId: 102525,
            Answers: [
                { Id: 102523, Text: "Apple site" },
                { Id: 102524, Text: "Google Site" },
                { Id: 102525, Text: "Bluemix" },
                { Id: 102526, Text: "Microsoft Azure" },
            ],
        },
        {
            Id: 24710,
            Text: "Hệ thống nào sau đây không tương đồng với hệ thống BlueMix",
            Marks: 1,
            AnswerId: 102530,
            Answers: [
                { Id: 102527, Text: "Heroku" },
                { Id: 102528, Text: "OpenShift" },
                { Id: 102529, Text: "Google Cloud Environment" },
                { Id: 102530, Text: "Microsoft Dynamics CRM" },
            ],
        },
    ];
});
