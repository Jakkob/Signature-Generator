angular.module('signatureGenerator', [])
	.controller('SigController', ['$scope', function($scope) {
		$scope.sigData = {
			name: 'John Doe',
			title: "Signature Designer",
			street: "785 Douglas Ave #131",
			city: "Altamonte Springs",
			state: "FL",
			zipCode: "32714",
			officeNumber: "(407) 869-1817",
			extention: "1234",
			cellNumber: "(123) 456-7890",
			email: "john_doe@company.com",
			linkedin: "https://www.linkedin.com/pub/brad-hollingsworth/5/9a2/527"
		}
	}])