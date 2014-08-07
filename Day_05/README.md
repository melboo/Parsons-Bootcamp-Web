WebG2014
========

Bootcamp Web G Section 2014


Day 5: CSS 
=========================

## Transitions##

- CSS transitions, which are part of the CSS3 set of specifications, provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

- Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.


**Transitional Properties**

- It is important to note, **not all properties may be transitioned**, only properties that have an identifiable halfway point. Colors, font sizes, and the alike may be transitioned from one value to another as they have recognizable values in-between one another. The display property, for example, may not be transitioned as it does not have any midpoint. A handful of the more popular transitional properties include the following.

- background-color 
- background-position 
- border-color 
- border-width 
- border-spacing 
- bottom 
- clip 
- color 
- crop 
- font-size 
- font-weight 
- height 
- left 
- letter-spacing 
- line-height 
- margin 
- max-height 
- max-width 
- min-height 
- min-width 
- opacity 
- outline-color 
- outline-offset 
- outline-width 
- padding 
- right 
- text-indent 
- text-shadow 
- top 
- vertical-align 
- visibility 
- width 
- word-spacing 
- z-index


**More About and examples:**
- MDN reference: (MDN reference:)[https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions]

- Advanced-html-css: (Advanced-html-css:)[http://learn.shayhowe.com/advanced-html-css/css-transforms/]

##CSS Vendor Prefixes

- CSS vendor prefixes or CSS browser prefixes are a way for browser makers to add support for new CSS features in a sort of testing and experimentation period. Browser prefixes are used to add new features that may not be part of a formal specification and to implement features in a specification that hasn’t been finalized.

**The CSS browser prefixes are:**

- Android: -webkit-
- Chrome: -webkit-
- Firefox: -moz-
- Internet Explorer: -ms-
- iOS: -webkit-
- Opera: -o-
- Safari: -webkit-

- In most cases, to use a more advanced CSS style property, you take the standard CSS property and add the prefix above for each browser. For example, if you want to add a CSS3 transition to your document, you would use the transition property with the prefixes listed first:

`-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;`

**Vendor Prefixes are Annoying But Temporary**


