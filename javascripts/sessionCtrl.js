//-----------------------------------------------------------------------------------------------
//REVIVE APP: SESSION CONTROL MODULE
//-----------------------------------------------------------------------------------------------
angular.module('revive').controller('SessionCtrl', ['$scope', '$timeout', 'Facebook', '$window',
    function ($scope, $timeout, Facebook, $window) {
        $scope.isLoggedOn = false;

        $scope.user = { id: '', name: '', accessToken: '' };

        $scope.login = function () {
            Facebook.login(function (response) {
                $scope.isLoggedOn = true;
                $scope.user.id = response.authResponse.userID;
                $scope.user.accessToken = response.authResponse.accessToken;
                $window.location.href = '/?#/search';
                $scope.getName();
            });
        };

        $scope.logout = function () {
            Facebook.logout(function () {
                $scope.$apply(function () {
                    $scope.user = {};
                    $scope.isLoggedOn = false;
                });
            });
        };

        $scope.getName = function () {
            Facebook.api('/me/', function (response) {
                $scope.user.name = response.name;
            });
        }
    }
]);