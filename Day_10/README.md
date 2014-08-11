WebG2014
========

Bootcamp Web G Section 2014


Day 10:
=========================

##Introduction JavaScript##

- `var x;` // Declare a variable named x.

- // Values can be assigned to variables with an `=` sign
- x = 0; // Now the variable x has the value 0

**JavaScript supports several types of values**
- `x = 1;` // Numbers.
- `x = 0.01;` // Just one Number type for integers and reals.
- `x = "hello world";` // Strings of text in quotation marks.
- `x = 'JavaScript';` // Single quote marks also delimit strings.
- `x = true;` // Boolean values.
- `x = false;` // The other Boolean value.
- `x = null;` // Null is a special value that means "no value".
- `x = undefined;` // Undefined is like null.


**JavaScript's most important data type is the object.**

An object is a collection of name/value pairs, or a string to value map.

- `var book = {`			// Objects are enclosed in curly braces.
- `topic: "JavaScript",` 	// The property "topic" has value "JavaScript". 
- `fat: true` 				// The property "fat" has value true.
- `};`						// The curly brace marks the end of the object.

Access the properties of an object with . or []:

- `book.topic`   // => "JavaScript"
- `book["fat"]` // => true: another way to access property values.
- `book.author = "Flanagan";` // Create new properties by assignment.
- `book.contents = {};` // {} is an empty object with no properties.

JavaScript also supports arrays (numerically indexed lists) of values:
- `var primes = [2, 3, 5, 7];` // An array of 4 values, delimited with [ and ].
- `primes[0]` => 2: the first element (index 0) of the array.
- `primes.length` // => 4: how many elements in the array.
- `primes[primes.length-1]` // => 7: the last element of the array.
- `primes[4] = 9;` // Add a new element by assignment.
- `primes[4] = 11;` // Or alter an existing element by assignment.
- `var empty = [];` // [] is an empty array with no elements.
- `empty.length` // => 0

// Operators act on values (the operands) to produce a new value. 
// Arithmetic operators are the most common:




***Resources***
- MDN [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)