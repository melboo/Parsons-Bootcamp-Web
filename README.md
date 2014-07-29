WebG2014
========

Bootcamp Web G Section 2014

## intro:
- go over character encoding article (reading assingment from last night) and why this is important. 

- go over HTML & CSS book intro and chapter 1 (briefly)

- have students mention one site they like from the home work and say why. 5 minutes each.

- demo Web Inspector in Dev Tools; re-style and break websites, hack Flickr and Instagram photos.  

- state how webpages are sort of like electronic or digital versions of documents.
  - EG: a newspaper like the NY Times. Same content in print and web, but in different form.


- explain how HTML is like our outline or skeleton of our webpages. It gives them structure. 
  - Just a bunch of boxes or containers. Later we will get more into something called the “box model” which describes the properties of these boxes.
  - create a hierarchy of information

- CSS is the style and explains where things should be positioned and how they should look.

- together they are the blue-prints for what we see on the web.

- p.s. CSS does some interactivity but this is primarily handled by Javascript. 

## anatonomy of an HTML tag


- what are html tags / elements? why do we need them? who wrote this annoying looking crap?

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

- most tags need to be closed. some are self closing.

- tags can be nested within each other. We indent nested tags to make our code more 'human readable.'

- a browser will render our html and apply really boring default styles without assigning it any CSS.

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
- escaping characters & unicode symbols ( *see book HTML & CSS pg 194* )   

### terminology:
  - DOM 
  - opening tag
  - closing tag
  - attribute
  - root
  - metadata
  - link
  - content
  - embed
  
### tips:
- I strongly recommend making **flash-cards** when you are first learning this stuff and then quizzing yourself a few times a day when you have 5-10 minutes. This will help a ton!

### homework: 
Reading (HTML & CSS pgs...), write a basic html page. Could be anything, don’t worry about getting stuff wrong. Get as crazy as you want but at the very minimum:

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

__ *Post this to the blog or email to me by 8am tomorrow.* __


## Reference:
- MDN [HTML5 element list](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)