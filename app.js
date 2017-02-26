// var app = angular.module('xapp', []);

// app.controller('xctrl',function($scope){
// 	$scope.operate = function(code){
// 		switch (code) {
// 			case 1 : $scope.operation = "ADD"; break;
// 			case 2 : $scope.operation = "SUBSTRACTION"; break;
// 			case 3 : $scope.operation = "Multiply"; break;
// 			case 4 : $scope.operation = "DIVIDE"; break;
// 		}
// 	};
// });

// Define the `phonecatApp` module
var app = angular.module('xapp', []);

app.controller('xctrl',function($scope){
	
	$scope.operate = function(code){
		var a = +$scope.obj1; // baca variable input dan + untuk membaca integer agar tidak string
		var b = +$scope.obj2;
		switch (code){
				case 1 : $scope.operation = "ADD"; 
					$scope.results = a + b;
				break;
				case 2 : $scope.operation = "SUBSTRACTION"; 
					$scope.results = a - b;
				break;
				case 3 : $scope.operation = "Multiply"; 
					$scope.results = a * b;
				break;
				case 4 : $scope.operation = "DIVIDE"; 
					$scope.results = a / b;
				break;
		}

	}

});

var myapp = angular.module('myApp', []);

myapp.controller('myCtrl',function($scope){
	
	$scope.mahasiswa = mahasiswa;

	$scope.pagesizes = [5,10,15,20]; //jumlah yg akan di tampilkan
	$scope.pagesize = $scope.pagesizes[0]; //jumlah baris dalam 1 halaman
	$scope.currentpage = 0;// lokasi halaman saat ini
	$scope.pagenumber = Math.ceil($scope.mahasiswa.length/$scope.pagesize);//jumlahtotal halaman

	$scope.paging = function(type){
		if(type == 0 && $scope.currentpage > 0){
			--$scope.currentpage;
		}else if(type == 1 && $scope.currentpage < $scope.pagenumber - 1){
			++$scope.currentpage;
		}
	}

	$scope.$watchCollection('results',function(){
		if($scope.results == undefined) return;
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
	})

	$scope.changeAction = function(p){
		$scope.pagesize = p;
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
	}

	$scope.ordering = function($ordvar, by){
		ordvar = !ordvar;
		$scope.ordstatus = ordvar;
		$scope.ord = by;
		return ordvar;
	}	
	
});

var mahasiswa = [{
		nama : "Asep Dadan",
		kelas : "MIF-R45/13",
		nilai : 90
	},{
		nama : "Asdan",
		kelas : "MIF-R45/13",
		nilai : 60
	},{
		nama : "Syahrul",
		kelas : "MIF-R45/13",
		nilai : 100
	},{
		nama : "Agam Muslim",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Roni Riadi",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Lukman Nurjaman",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Rohmat nurjaman",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Muahmmad reja",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Lutfi",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Lukman Nurjaman",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Rohmat nurjaman",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Muahmmad reja",
		kelas : "MIF-R45/13",
		nilai : 90
	},
	{
		nama : "Lutfi",
		kelas : "MIF-R45/13",
		nilai : 90
	}];


