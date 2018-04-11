app.controller("travelReimbursementController", function ($scope, $routeParams) {

    $scope.travelReimbursementId = $routeParams.travelReimbursementId;

    if ($scope.travelReimbursementId) {
        $("#travelReimbursementId").text($scope.travelReimbursementId);
    } else {
        $("#travelReimbursementId").text("");
    }

    $scope.getTravelReimbursements = function () {

        $scope.columns = [{
            field: 'TravelReimbursementId',
            displayName: 'Travel Reimbursement#',
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

        $scope.travelReimbursementGridOptions = {
            enableSorting: false,
            columnDefs: $scope.columns,
            enableFiltering: true,
            paginationPageSizes: [1, 3, 5],
            paginationPageSize: 10,
            onRegisterApi: function (gridRequests) {
                $scope.gridApiTravelReimbursement = gridRequests;
            }
        };

        $scope.travelReimbursementGridOptions.data =
            [
                {
                    "TravelReimbursementId": 123456,
                    "Purpose": "Just like that",
                    "SubmittedByUser": "NatarajS"
                },
                {
                    "TravelReimbursementId": 5454534,
                    "Purpose": "Just like that",
                    "SubmittedByUser": "NatarajS"
                },
                {
                    "TravelReimbursementId": 8624255,
                    "Purpose": "Just like that",
                    "SubmittedByUser": "NatarajS"
                },
                {
                    "TravelReimbursementId": 983472,
                    "Purpose": "Just like that",
                    "SubmittedByUser": "NatarajS"
                }
            ];
    }

    $scope.getTravelReimbursements();
});