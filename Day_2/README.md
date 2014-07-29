WebG2014
========

Bootcamp Web G Section 2014


## anatonomy of an HTML tag

- semantics in html: help us read our code easier, don’t really affect how pages are rendered.
  - they are used by screen readers however

- anatomy of a tag: 
  - left bracket to open `<`
    - if you are writing a closing tag, then next would come a `/`
  - tag name or character, eg: `div` or `p`
  - attributes, like: `style=“color: aqua;”` or `href=“./images/img.jpg”` or `lang=“en-us”`
    - `attribute name` then `=` then `value`
    - notice no spaces between the attribute name, `=` and `“”`
    - value can be multiple properties such as used by inline CSS, eg: `style="background-color:#FFF;"`	
  - right bracket to close `>`

## the most common tags

Go through most common tags, coding them one by one explaining & what each is for.

  - `<!doctype html>`
    - not an actual tag but a declaration; tells the browser what version of html we are coding our page in. 
  - `<html>`
    - we begin and end our page with this. needs to be closed
  - `<head>`
    - information about our page and links to external stuff our page uses, doesn’t get rendered to the browser’s viewport. needs to be closed.
  - `<title>`
    - the title of your webpage.
  - `<meta>`
    - descriptive properties about our page like the language, character encoding, the author, title, key words, etc. self closing.
    - used by search engines
    - requires the `name` and `content` attributes.
  - `<style>`
    - one place where we can add CSS. talk more later. needs to be closed.
  - `<link>`
    - literally tells our browser what other files we want for things like CSS files and icons.
  - `<script>`
    - where we put our JS or tell our browser where to find it. Could be elsewhere on the web or on our computer.
  - `<body>`
    - the start of where all the visible content in our webpage goes, ie this stuff is rendered in the browser’s viewport.
  - `<h1> … <h6>`
    - headers that create hierarchy like an outline. 1 is most important, 2 is less, etc. 
  - `<div>`
    - used to group other elements in a block.
    - Helps for styling & positioning groups of elements as well as keeping your code readabe.
  - `<span>`
    - like a div but for grouping elements inline.
    - used primarily for styling with CSS 
  - `<p>`
    - used to enclose paragraphs of text
  - `<a>`
    - create a clickable link 
    - with `href` attribute: to another web page on the internet OR to another part of our page.
      - link to a specific part of the same page by doing `href=“#some-id”`
      - can combine this technique to link to a specific part of an external page as well
      - or just use “#” as a placeholder
    - with `mailto` attribute: will start user’s email program and insert email address
    - with `target=“_blank”` it will open the link in a new window
  - `<br>`
    - creates a break between elements. self closing.
  - `<hr>`
    - creates a ruled line. self closing.
  - `<b>, <i>, <em>`
   - for semantically styling text: bold, italic, emphasis.
   - we don’t really use these to style our pages anymore, but sometimes they’re helpful.
  - `<ul> , <ol>, <li>`
    - un-ordered list, ordered list, list element.
    - q: why use an ordered list? why an un-ordered list?
    - a: recipe instructions, creating a navigation bar.
    - lists can be nested.
  - `<img>`
    - for placing a block level image. self closing.
    - src attribute: `src=“path/to/img.jpg”`
    - alt attribute
    - title attribute
    - width & height
  - `<iframe>`
    - we can place a website from somewhere else inside our website. whoa!
    - requires following attributes: src, width, height
  - `<!— —>`
    - comments: for we want to describe parts of the site or “comment out” code. browser won’t read these.

### watch out for:
- not closing your tags!
- white space: web browsers will render extra white space as a single line space and a new line without a `<br>` on the same line  


### homework: 

Could be anything, don’t worry about getting stuff wrong. Get as crazy as you want but at the very minimum:

- make some more HTML! Create something meaningful, could be a recipe, instructions to build something, a bibliography, poetry, fictional story.
- set up a webpage as we've done in class using the doctype declaration as well as root, head, and body tags.
- inside your head tag be sure to specify things like the title, character encoding, author, description, etc.
- use at least:
  - 3 `<h1>...<h6>` elements, 
  - 2 `<p>` tags, 
  - an ordered list, `<ol>` 
  - an unordered list, `<ul>`
  - at least one `<br>`, 
  - at least one `<hr>`, 
  - one link using `<a href="#">`, 
  - one image using `<img>`, 
  - 3 `<div>`'s, 
  - 2 `<span>`'s
- ** _important:_ ** write a `<!-- comment -->` above each line of code in your document saying what it does, in a way that makes sense to you.



## Reference:
- MDN [HTML5 element list](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)