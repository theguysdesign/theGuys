## Page Layout
This page defines what is page structure and what Components are needed to build it. 
All future changes to page design should be described here first.

## Table of contents
- [Page Layout](#page-layout)
- [Table of contents](#table-of-contents)
- [Structure](#structure)
  - [Navigation](#navigation)
  - [Menu](#menu)
  - [Body](#body)
  - [Footer](#footer)
  - [Other components](#other-components)
- [Design](#design)
  - [Colors](#colors)
  - [Typography](#typography)
- [License](#license)

## Structure
### Navigation
  * Upper static navigation bar
  * Fixed
  * Separator (as boxShadow)
> **Components**: Navigation, NavigationMenu, NavigationLogo, NavigationIcons
### Menu
  * On the left side
  * Sticky
  * Without separator
  * 30% of page
> **Components**: Menu, MenuHeader
### Body
  * Scroll
  * 60% od page
> Components: Body, BodyHeader 
### Footer
  * Absolute
  * minWidth: 100px
> **Components**: Footer

### Other components
* Links
* Buttons

## Design
### Colors
There's no other particular reason why I named colors like this than I'm bored of naming things like `primary` or `secondary` 🤷🏼‍♂️
* Alfa: `#000000`
  * simple, classic, warm black 
  * rgb(0,0,0)
  * text
* Beta: `#3f3f3f`
  * describers, additions
  * rgb(63,63,63)
* Gamma: `#f03278`
  * enhanced pink 
  * rgb(240,50,120)
  * links
* Delta: `#ffffff`
  * pure, clean white
  * rgb(255,255,255)
  * background, additions
### Typography
* Font family: Open Sans / Fira Sans
* Font size: 18px
* Font weight: 200
* Line height: 1.3
* Letter spacing: 0.0625
* Text rendering: optimizeLegibility
* Small caps: Concourse C2
  * Font feature setting: all letters small ("c2sc", "smcp")

## License
MIT © [robertgrzonka](mailto:robert@theguys.sh)
