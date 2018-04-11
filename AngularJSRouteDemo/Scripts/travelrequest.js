app.controller("travelRequestController", ['$scope', '$location','$routeParams', function ($scope, $location, $routeParams) {

    $scope.travelRequestId = $routeParams.travelRequestId;

    if ($scope.travelRequestId) {
        $("#travelRequestId").text($scope.travelRequestId);
    } else {
        $("#travelRequestId").text("");
    }

    $scope.updateTotal = function () {

            $scope.estimatedCostTotal = ($scope.estimatedCost1 * 1);

        if ($scope.estimatedCost2) {
            $scope.estimatedCostTotal += ($scope.estimatedCost2 * 1);
        }

        if ($scope.estimatedCost3) {
            $scope.estimatedCostTotal += ($scope.estimatedCost3 * 1);
        }
    }

    $scope.showEstimatedCost3 = function () {
        $("#estimatedCost3Section").show();
    }

    $scope.go = function (hash) {
        $location.path(hash);
    }

    $scope.getTravelRequests = function() {

        $scope.columns = [{
            field: 'TravelRequestId',
            displayName: 'Travel Request#',
            headerCellClass: "existingrequestcolumnheader",
            cellClass: "existingrequestcolumnvalue",
            filter: {
                placeholder: '🔎 search',
                cellClass: 'travelrequestidcolumn'
            }
        },
        {
            field: 'Purpose',
            name: 'Purpose',
            headerCellClass: "existingrequestcolumnheader",
            cellClass: "existingrequestcolumnvalue",
            cellTooltip:
            function (row, col) {
                return row.entity.Purpose;
            },
            filter: {
                placeholder: '🔎 search'
            }
        },
        {
            field: 'SubmittedByUser',
            name: 'Submitted By',
            headerCellClass: "existingrequestcolumnheader",
            cellClass: "existingrequestcolumnvalue",
            filter: {
                placeholder: '🔎 search'
            }
        }];

        $scope.travelRequestGridOptions = {
            enableSorting: false,
            columnDefs: $scope.columns,
            enableFiltering: true,
            paginationPageSizes: [1, 3, 5],
            paginationPageSize: 10,
            onRegisterApi: function (gridRequests) {
                $scope.gridApiTravelRequest = gridRequests;
            }
        };

        $scope.travelRequestGridOptions.data = 
        [
            {
                "TravelRequestId": 123456,
                "Purpose": "Just like that",
                "SubmittedByUser": "NatarajS"
            },
            {
                "TravelRequestId": 5454534,
                "Purpose": "Just like that",
                "SubmittedByUser": "NatarajS"
            },
            {
                "TravelRequestId": 8624255,
                "Purpose": "Just like that",
                "SubmittedByUser": "NatarajS"
            },
            {
                "TravelRequestId": 983472,
                "Purpose": "Just like that",
                "SubmittedByUser": "NatarajS"
            }
        ];
    }

    $scope.getTravelRequests();
}]);