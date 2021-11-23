let app = angular.module("myApp", []);

app.controller("caseDetails", function($scope) {
    $scope.cases = [{
            "location": "Tamilnadu",
            "totalCases": 2617943,
            "deaths": 34961
        },
        {
            "location": "Kerala",
            "totalCases": 4122133,
            "deaths": 21149
        },
        {
            "location": "Karnataka",
            "totalCases": 2951844,
            "deaths": 37361
        },
        {
            "location": "Gujarat",
            "totalCases": 1437839,
            "deaths": 25082
        },
        {
            "location": "Kolkata",
            "totalCases": 1009223,
            "deaths": 8028
        }

    ];
})
app.controller("vaccineDetails", function($scope) {
    $scope.peoples = [{
            "country": "India",
            "fullVaccine": "100.56 million",
            "partVaccine": "473 million"
        },
        {
            "country": "Malaysia",
            "fullVaccine": "12.36 million",
            "partVaccine": "5.02 million"
        },
        {
            "country": "Indonesia",
            "fullVaccine": "575775",
            "partVaccine": "5885885"
        },
        {
            "country": "Myanmar",
            "fullVaccine": "724812",
            "partVaccine": "2.70 million"
        },
        {
            "country": "Bangladesh",
            "fullVaccine": "8.25 million",
            "partVaccine": "10.50 million"
        }

    ];
})
