'use strict';

var isProbabilityArray = require( './../lib' ),
	data;

data = [0.4,0.4,0.2];
console.log( data );
console.log( isProbabilityArray( data ) );

data = [1,2,3];
console.log( data );
console.log( isProbabilityArray( data ) );

data = [ new Number( 1 ) ];
console.log( data );
console.log( isProbabilityArray( data ) );

data = [];
console.log( data );
console.log( isProbabilityArray( data ) );

data = [ NaN ];
console.log( data );
console.log( isProbabilityArray( data ) );

data = ['a','b','c'];
console.log( data );
console.log( isProbabilityArray( data ) );
