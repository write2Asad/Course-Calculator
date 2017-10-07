//angular.module( "app", [ 'ng-fusioncharts' ] )
angular.module( "app", [] )
	.controller( "courseForm", [ "$scope",'$window', courseFormCtrl ] );

function courseFormCtrl( $scope,$window, $timeout ) {
	//year-0
	$scope.credits = [ {
		credits_15: '',
		credits_30: '',
		credits_45: '',
		credits_60: '',
		totalCredits: 0
    } ]

	$scope.addCredits = function () {

		$scope.credits.push( {
			credits_15: '',
			credits_30: '',
			credits_45: '',
			credits_60: '',
			totalCredits: 0
		} )
	}
	$scope.totalCredits = 0;
	$scope.getTotalCredits = function ( item ) {
		return ( item.credits_15 * 15 ) + ( item.credits_30 * 30 ) + ( item.credits_45 * 45 ) + ( item.credits_60 * 60 );
	}
	$scope.$watch( 'credits', function () {
		$scope.totalCredits = _.sum( _.map( $scope.credits, $scope.getTotalCredits ) );

	}, true );
	// $scope.unit_credits_year_zero_15credits = '';
	// $scope.unit_credits_year_zero_30credits = '';
	// $scope.unit_credits_year_zero_45credits = '';
	// $scope.unit_credits_year_zero_60credits = '';
	// // year1
	// $scope.unit_credits_year_one_15credits = '';
	// $scope.unit_credits_year_one_30credits = '';
	// $scope.unit_credits_year_one_45credits = '';
	// $scope.unit_credits_year_one_60credits = '';
	// // year2
	// $scope.unit_credits_year_two_15credits = '';
	// $scope.unit_credits_year_two_30credits = '';
	// $scope.unit_credits_year_two_45credits = '';
	// $scope.unit_credits_year_two_60credits = '';
	// // year3
	// $scope.unit_credits_year_three_15credits = '';
	// $scope.unit_credits_year_three_30credits = '';
	// $scope.unit_credits_year_three_45credits = '';
	// $scope.unit_credits_year_three_60credits = '';
	// // year4
	// $scope.unit_credits_year_four_15credits = '';
	// $scope.unit_credits_year_four_30credits = '';
	// $scope.unit_credits_year_four_45credits = '';
	// $scope.unit_credits_year_four_60credits = '';
	//$scope.totalYearOne = (15*$scope.unit_credits_year_one_15credits) + (30*$scope.unit_credits_year_one_30credits) + (45*$scope.unit_credits_year_one_45credits) + (60*$scope.unit_credits_year_one_60credits);
	$scope.students = [ {
		type: '',
		name: '',
		fee: ''
    } ];
	$scope.adtionalExpense = [ {
		description: '',
		cost: ''
    } ]
	$scope.totalStaffExpense = 0;
	$scope.totalIncome = 0;
	$scope.totalAditionalExpense = 0;
	$scope.courseIncome = $scope.totalIncome - ( $scope.totalAditionalExpense + $scope.totalStaffExpense );
	$scope.$watch( 'students', function () {
		$scope.totalIncome = _.sum( _.map( $scope.students, $scope.multiply ) );
		$scope.totalStudent = _.sum( _.map( $scope.students, 'name' ) );


		$scope.courseIncome = $scope.totalIncome - $scope.totalStaffExpense;
		$scope.updateCostIncome();
	}, true );

	$scope.$watch( 'adtionalExpense', function () {
		console.log( this );
		$scope.totalAditionalExpense = _.sum( _.map( $scope.adtionalExpense, "cost" ) );
		$scope.courseIncome = $scope.totalIncome - $scope.totalStaffExpense;
		$scope.updateCostIncome();
	}, true );


	$scope.$watch( 'staffs', function () {
		window.setTimeout( function () {
			$( '.ui.dropdown' )
				.dropdown( {

				} );
		}, 500 )

		$scope.updateCostIncome();
	}, true );

	$scope.multiply = function ( value ) {
		return value.name * value.fee;
	}

	$scope.addStudents = function () {
		let size = $scope.students.length;
		//console.log(size);
		//let typeWithSmall = type.toLowerCase();
		let student = {
			type: '',
			name: '',
			fee: '',
			mode: ''
		}
		$scope.printDoc = function(){
			console.log(this);
			$window.print();

		}
		$scope.students.push( student );
		$( '.ui.dropdown.student' )
			.dropdown();
		window.setTimeout( function () {
			$( '.ui.dropdown.student' )
				.dropdown();
		}, 300 )
	}
	$scope.staffs = [ {
		level: "",
		numberOfStaff: '',
		salary: '',
		cost: ''
    } ];
	$scope.addStaff = function () {
		//let size = $scope.staffs.length;
		//let levelWithSmall = level.toLowerCase();
		//console.log( level );
		let staff = {
			level: '',
			numberOfStaff: '',
			salary: '',
			cost: '',
			name: ''
		}
		$scope.staffs.push( staff );
	}
	$scope.deleteStudent = function ( obj ) {
		let self = $scope.students;

		console.log( obj )
		$( '.ui.student.modal' )
			.modal( {
				closable: false,
				onDeny: function () {
					//window.alert('Wait not yet!');
					//this.modal('hide');
					//return false;
				},
				onApprove: function () {
					//  window.alert('Approved!');
					//let index = self.indexOf( obj );


					self.splice( self[ obj ], 1 );


				}
			} )
			.modal( 'show' );







	}
	$scope.addAditionalExpense = function () {
		let exp = {
			description: '',
			cost: ''
		}
		$scope.adtionalExpense.push( exp );
	}
	$scope.deleteStaff = function ( index ) {

		let self = $scope.staffs;
		console.log( index )
		$( '.ui.approved.modal' )
			.modal( {
				closable: false,
				onDeny: function () {
					//window.alert('Wait not yet!');
					//this.modal('hide');
					//return false;
				},
				onApprove: function () {
					//  window.alert('Approved!');
					//let index = self.staffs.indexOf( obj );
					if ( index > -1 ) {

						self.splice( index, 1 );

					}

				}
			} )
			.modal( 'show' );


	}
	$scope.updateCostIncome = function () {
		$scope.totalStaffs = _.sum( _.map( $scope.staffs, 'numberOfStaff' ) );
		$scope.totalStaffExpense = _.sum( _.map( $scope.staffs, function ( staff, key ) {
			let total = staff.numberOfStaff * staff.salary;


			return total;
		} ) );
		$scope.totalAditionalExpense = _.sum( _.map( $scope.adtionalExpense, "cost" ) );

		$scope.courseIncome = $scope.totalIncome - ( $scope.totalStaffExpense + $scope.totalAditionalExpense );
	}


}
$( '.ui.dropdown' )
	.dropdown( {

	} );
$( '.ui.dropdown.menu' )
	.dropdown( {
		transition: 'drop'
	} );
$( '.accordion' ).accordion( {
	exclusive: false,
	collapsible: true
} )
$( '.ui.dropdown' )
	.dropdown( {

	} );
window.setTimeout( function () {
	$( '.ui.dropdown' )
		.dropdown( {

		} );
}, 500 )

document.querySelector('.print').onclick = function(){
	console.log(this);
	window.print();
}
