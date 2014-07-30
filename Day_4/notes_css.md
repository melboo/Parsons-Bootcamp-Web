WebG2014
========

Bootcamp Web G Section 2014


Day 4: CSS Positioning and Floats
=========================

## Positioning

- The CSS positioning properties allow you to position an element. It can also place an element behind another, and specify what should happen when an element's content is too big.

- Elements can be positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the positioning method.

**There are four different positioning methods:**


###Static Positioning###
- HTML elements are positioned static by default. A static positioned element is always positioned according to the normal flow of the page.

- Static positioned elements are not affected by the top, bottom, left, and right properties.


###Fixed Positioning###
- An element with fixed position is positioned relative to the browser window.

- It will not move even if the window is scrolled:

Example:
`p.pos_fixed {
    position: fixed;
    top: 30px;
    right: 5px;
}`

- Fixed positioned elements are removed from the normal flow. The document and other elements behave like the fixed positioned element does not exist.

- Fixed positioned elements can overlap other elements.


###Relative Positioning###
-A relative positioned element is positioned relative to its normal position.

Example: `h2.pos_left {
    position: relative;
    left: -20px;
}`

h2.pos_right {
    position: relative;
    left: 20px;
}`

- The content of relatively positioned elements can be moved and overlap other elements, but the reserved space for the element is still preserved in the normal flow.

`h2.pos_top {
    position: relative;
    top: -50px;
}`

## How it works
From MDN, [How CSS works](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/How_CSS_works)

When a browser displays a document, it must combine the document's content with its style information. It processes the document in two stages:

1. "The browser converts the markup language and the CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style."

2. The browser displays the contents of the DOM.
 

## Using CSS
__3 Ways to use CSS in our HTML:__

1. We can write CSS in our `<style>` element (which goes in the `<head>`)
2. We can link to external CSS documents from our HTML page inside our `<head>`: 
3. Inline CSS within HTML tags, not easily maintainable but good for testing: 
    - example: `<p style="color:aqua">`  

__However:__

- External style-sheets are the preffered way to write our CSS when writing webpages.
- We Link external CSS to our HTML page(s).
- we do this by using the following code inside our `<head>` element: 
  - `<link href="path/to/style-sheet.css" rel="stylesheet" type="text/css" media="all">`

### Style priority:
#### In order of increasing priority:
- (4) external link
- (3) inside head 
- (2) inline style attribute
- (1) using !important * (not a good idea)

**_Each following method(s) ^ will overide the previous one(s)._**

#### conflicting properties:
- The last one will override previous one (_demonstrate this_).

#### non-conflicting:
- Will be combined (_demonstrate this_).


### anatomy of CSS Syntax
CSS works with `selectors` and `properties`:
 
 ```
 selector {
   property: value;
   property: value;
   property: value;
 }
 ```
* a `selector` is what targets an HTML element on our page
* an opening curly bracket `{` to start our declaration
* a `property` followed by a colon `:` then a `value` (some properties take multiple values)
* a semicolon `;` which states this is the end of one CSS property.
* a closing curly bracket `}`

We can write `comments` in CSS like so:

```
/* this is a CSS comment */

/*
  this is a multi-line CSS comment
  that goes on
  and on
  and on
*/
```

Selectors can be __combined__ to create __*compound selectors*__:

* we use a space to create nested selectors
  * `.product p #sale-item { ... }`
* we use no space to combine selectors
  * `.product p#sale-item { ... }`
* we use commas `,` to group selectors
  * `.product, p, #sale-item { ... }`
  
_(demonstrate each of these)_

### Inheritance & Specificity

#### inheritance
- any nested / children elements will inherit properties of parent element.
- nested selectors can override inherited parent styles

```
.featured { color: #0000ff; }
.featured p { color: #fff; }
```
#### specificity

To determine the priority of a selector use a four digit list: 
  
- `0,0,0,0` maps to —> number of `inline styles`, number of `id selectors`, number of `class selectors`, number of `element selectors`.
- __note:__ the `!important` value will override all of these.
- if digits in two or more places are the same number then CSS will default to the last one in the list.
- but if there is a digit > 0 before a following digit it will override the following methods.
  - (for example if you have 1 id but 2 classes and 2 element selectors the id will override the class and element selectors).

__examples:__

- an element selector: `h3 { color: #000; }` --> 0,0,0,1
- a class selector: `.foreground { color: rgb(100,100,0);}` --> 0,0,1,0
- an id selector: `#speacil { color: #FFF000; }` --> 0,1,0,0
- an inline-style: `<h3 style="color:hsl(0,50%,50%);"` --> 1,0,0,0
- an important override: `h3 { color: #00e9ff !important;}` --> overrides all the above

_more complex:_

1. 2 classes and 1 element: `.foreground p.test { color: #000FFF; }` --> 0,0,2,1
2. 2 classes and 2 elements: `.foreground p a.hover { color: #00e9ff; }` --> 0,0,2,2

in the above example 2. would override 1. because the # of element selectors is the same as the # of class selectors, _but..._

- if we add an id, it will override both 1. and 2.
- ex: `#some-id { color: #000; }` --> 0,1,0,0

For this reason it's generally a good practice to not use a lot of id's.

__caution:__ space or no space between selectors matters!

- ex: `.primary p .copyright` vs. `.primary p.copyright`

#### Solving Specificity problems
- using default values for html elements
- Normalize CSS
- Reset CSS

#### despecifying
- refactor code that is specific to be more broad
  - ie: write an element selector for all `<p>`s instead of something like `<p class=“main second”>`.

## Best Practices
- write CSS in an external file and link it to your HTML
- use the indentation method of writing CSS
- practice D.R.Y. CSS by:
  - use inheritance 
  - limiting the number of id's
  - use classes instead
  - grouping selectors when possible
  - not getting over-specific with CSS / use selector abstraction
- try not to use the `!important` flag


## references:
- MDN reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- css tricks: http://css-tricks.com/pseudo-class-selectors/
- more css tricks: http://css-tricks.com/pseudo-element-roundup/

* Chris Henrick
