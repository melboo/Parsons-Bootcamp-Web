WebG2014
========

Bootcamp Web G Section 2014


Day 10:
=========================

##Introduction JavaScript##

`var x;` // Declare a variable named x.

// Values can be assigned to variables with an `=` sign
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.
// JavaScript supports several types of values
x = 1;
x = 0.01;
x = "hello world"; x = 'JavaScript'; x = true;
x = false;
// Numbers.
// Just one Number type for integers and reals. // Strings of text in quotation marks.
// Single quote marks also delimit strings.
// Boolean values.
// The other Boolean value.


***Resources***
- MDN [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

// Operators act on values (the operands) to produce a new value. // Arithmetic operators are the most common:
3 + 2 // => 5: addition
￼￼1.1 Core JavaScript | 5
3 - 2
3 * 2
3 / 2
points[1].x - points[0].x "3" + "2"
// JavaScript defines some
// => 1: subtraction
// => 6: multiplication
// => 1.5: division
// => 1: more complicated operands work, too
// => "32": + adds numbers, concatenates strings
shorthand arithmetic operators // Define a variable
// Increment the variable
// Decrement the variable
// Add 2: same as count = count + 2;
// Multiply by 3: same as count = count * 3; // => 6: variable names are expressions, too.
var count = count++; count--; count += count *= count
// Equality
// unequal,
var x = 2, y = 3; x == y
x != y
x < y
x <= y
x > y
x >= y
"two" == "three" "two" > "three" false == (x > y)
2; 3;
0;
// Logical operators combine or invert boolean values
(x == 2) && (y == 3) (x > 3) || (y < 3) !(x == y)
// => true: both comparisons are true. && is AND // => false: neither comparison is true. || is OR // => true: ! inverts a boolean value
operators test whether two values are equal,
and relational
less than, greater than, and so on. They evaluate to true or false.
// These = signs are assignment, not equality tests // => false: equality
// => true: inequality
// => true: less-than
// => true: less-than or equal
// => false: greater-than
// => false: greater-than or equal
// => false: the two strings are different
// => true: "tw" is alphabetically greater than "th" // => true: false is equal to false