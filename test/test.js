/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var isProbabilityArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-probability-array', function tests() {

	it( 'should export a function', function test() {
		expect( isProbabilityArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isProbabilityArray( [ 0.2, 0.2, 0.3, 0.3 ] );
		assert.ok( bool );
	});

	it( 'should positively validate even when due to floating-point errors the sum of the values is not equal to one', function test() {
		var bool = isProbabilityArray( [ 0.1, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1 ] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1, new Number(1)],
			['1','2','3'],
			[ 1, 2, 3 ],
			[ -0.5, 0.5 ],
			[ NaN ]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isProbabilityArray( value );
		}
	});

});
