function MainController($scope) {
	$scope.name = "Brett"
	$scope.email = "brett@mail.com"
	$scope.phone = "555-555-5555"
}

angular
	.module('app')
	.controller('MainController', MainController)
