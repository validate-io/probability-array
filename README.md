probability-array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array of non-negative number primitives summing to one.


## Installation

``` bash
$ npm install validate.io-probability-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isProbabilityArray = require( 'validate.io-probability-array' );
```

#### isProbabilityArray( value )

Validates if a `value` is an `array` of positive `number` primitives, __excluding__ NaN, which sum to one.

``` javascript
var probs = [ 0.25, 0.25, 0.3, 0.2 ];

var bool = isProbabilityArray( probs );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isProbabilityArray = require( 'validate.io-probability-array' );

console.log( isProbabilityArray( [0.4,0.4,0.2] ) );
// returns true

console.log( isProbabilityArray( [1,2,3] ) );
// returns false

console.log( isProbabilityArray( [ new Number( 1 ) ] ) );
// returns false

console.log( isProbabilityArray( [] ) );
// returns false

console.log( isProbabilityArray( [ NaN ] ) );
// returns false

console.log( isProbabilityArray( ['a','b','c'] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-probability-array.svg
[npm-url]: https://npmjs.org/package/validate.io-probability-array

[travis-image]: http://img.shields.io/travis/validate-io/probability-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/probability-array

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/probability-array/master.svg
[codecov-url]: https://codecov.io/github/validate-io/probability-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/probability-array.svg
[dependencies-url]: https://david-dm.org/validate-io/probability-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/probability-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/probability-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/probability-array.svg
[github-issues-url]: https://github.com/validate-io/probability-array/issues
