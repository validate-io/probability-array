'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
  isTypedArrayLike = require( 'validate.io-typed-array-like' );


// IS PROBABILITY ARRAY //

/**
* FUNCTION: isProbabilityArray( value )
*	Validates if a value is an array of positive number primitives, excluding NaN, which sums to one.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of probabilities
*/
function isProbabilityArray( value ) {
	var len, v,
    sum = 0;
	if ( !isArray( value ) &&  !isTypedArrayLike( value ) ) {
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
  if ( sum !== 1 ) {
    return false;
  }
	return true;
} // end FUNCTION isProbabilityArray()


// EXPORTS //

module.exports = isProbabilityArray;
