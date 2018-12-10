<img src="./static/theguysdesign.svg" width="200px">

Public code from [theguys.design](https://theguys.design)

## Table of contents
- [Table of contents](#table-of-contents)
- [Layout](#layout)
- [Structure](#structure)
  - [Navigation](#navigation)
  - [Menu](#menu)
  - [Body](#body)
  - [Footer](#footer)
  - [Other components](#other-components)
- [Design](#design)
  - [Colors](#colors)
  - [Typography](#typography)
- [Join us!](#join-us)
  - [Contributors:](#contributors)
- [License](#license)
## [Layout](#layout)
This defines how page structure looks and which Components were used to built it. All future design changes should be described here before any other actions.

## Structure
### Navigation
  * Upper static navigation bar
  * Fixed
  * Separator (as boxShadow)
  
**Components**: Navigation, NavigationMenu, NavigationLogo, NavigationIcons

### Menu
  * On the left side
  * Sticky
  * Without separator
  * 30% of page
  
**Components**: Menu, MenuHeader

### Body
  * Scroll
  * 60% od page
  
Components: Body, BodyHeader 

### Footer
  * Absolute
  * minWidth: 100px
  
**Components**: Footer


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

List of all colors looks like this:
```javascript
const basicColors = {
  black: 'rgb(0,0,0)',
  white: 'rgb(250,250,250)',
  gray: 'rgb(64,64,64)',
  pink: 'rgb(240,50,120)',
  red: 'rgb(86,8,24)',
  darkcyan: '#008B8B',
  darkturqoise: '#00CED1'
}

const Colors = {
  primary: basicColors.black,
  secondary: basicColors.white,
  pink: basicColors.pink,
  gray: basicColors.gray,
  red: basicColors.red,
  cyan: basicColors.darkcyan,
  teal: basicColors.darkturqoise
}

export default Colors

// and then in your Component
import Colors from '../../design/colors'
import {css} from '@emotion/core'

const Paragraph = props => (
  <p css={`
    font-size: 1em;
    color: ${Colors.teal}
    `}
  >
    This should have teal color.
  </p>
)
```
### Typography
* Font family: Fira Sans, sans-serif
* Font size: 16px
* Font weight: 300
* Line height: 1.3
* Letter spacing: 0.0625
* Text rendering: optimizeLegibility
* Small caps: Concourse C2
  * Font feature setting: all letters small ("c2sc", "smcp")


## Join us!
> Feel free to contribute!

If you find a typo or bug don't hesitate and simply fix it by making pull request. You can do it if you have an idea for nice feature. Or you can [join us!][https://theguys.sh/join] as a Crew! To make it easier for you, we've created four teams with different responsibilities.

### Teams
> Four teams for the Crew.

* [theCopywriters](https://github.com/orgs/theguysdesign/teams/thecopywriters)
* [theDesigners](https://github.com/orgs/theguysdesign/teams/thedesigners)
* [theDevelopers](https://github.com/orgs/theguysdesign/teams/thedevelopers)
* [theSupporters](https://github.com/orgs/theguysdesign/teams/thesupporters)


### Contributors:
> Blank page ☹️

## License
MIT © [robertgrzonka](mailto:robert@theguys.sh)
