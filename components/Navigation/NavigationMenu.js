/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

const link = {
  marginRight: 30,
  fontVariant: 'small-caps',
  textTransform: 'lowercase',
  fontSize: '1.1rem'
}

const NavLink = props => (
  <Link as={`/${props.id}`} href={`/${props.title}`}>
    <a style={link}>{props.title}</a>
  </Link>
)

const NavigationMenu = ({ children }) => (
  <div css={css`
    text-align: left;
    margin-left: 15vw;
    width: 30vw;
    `}
  >
    <NavLink id='blog' title='Blog' />
    <NavLink id='projects' title='Projects' />
    <NavLink id='about' title='About' />
    {children}
  </div>
)

export default NavigationMenu
