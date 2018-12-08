/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

export const MenuHeader = props => (
  <div css={css`
    font-weight: 100;
    margin: 50px 0 15px 15vw;
    color: black;
    font-variant: small-caps;
    text-transform: uppercase;
    font-size: 1rem;
    `}{...props}
  >
    {props.title}
  </div>
)

export const MenuLink = props => (
  <Link as={`/${props.id}`} href={`/${props.title}`}>
    <a css={css`
    margin: 5px 0px 5px 15vw;
    `}
    >
      {props.title}
    </a>
  </Link>
)

export const Menu = ({ children }) => (
  <div css={css`
    width: 30vw,
    padding-top: 20px,
    margin-top: 10px
    display: inline-block,
    position: sticky,
    overflow: hidden
    `}
  >
    {children}
  </div>
)
