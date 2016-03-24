'use strict';

// MODULES //

var abs = require( 'math-abs' );
var isArrayLike = require( 'validate.io-array-like' );
var isString = require( 'validate.io-string-primitive' );
var isTypedArrayLike = require( 'validate.io-typed-array-like' );
var FLOAT64_EPSILON = require( 'const-eps-float64' );


// IS PROBABILITY ARRAY //

/**
* FUNCTION: isProbabilityArray( value )
*	Validates if a value is an array of positive number primitives, excluding NaN, which sums to one.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of probabilities
*/
function isProbabilityArray( value ) {
	var len;
	var v;
	var sum = 0;
	if ( isString( value ) ) {
		return false;
	}
	if ( !isArrayLike( value ) && !isTypedArrayLike( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		v = value[ i ];
		if ( typeof v !== 'number' || v !== v || v < 0 ) {
			return false;
		}
		sum += v;
	}
	if ( abs( sum - 1 ) > FLOAT64_EPSILON ) {
		return false;
	}
	return true;
} // end FUNCTION isProbabilityArray()


// EXPORTS //

module.exports = isProbabilityArray;
