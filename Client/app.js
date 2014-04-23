var client = angular.module('client', []);

client.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

    var ctrl = this,
		externalLogins;

    ctrl.getExternalLoginSucess = function(response) {
        externalLogins = response.data;
    };

    $scope.login = function () {
		var url = externalLogins[0].url;
        $http.get('http://localhost:9046' + url);
    };

    $http.get('http://localhost:9046/api/account/externalLogins?returnUrl=http://localhost:8000/&generateState=true')
        .then(ctrl.getExternalLoginSucess);

} ]);

