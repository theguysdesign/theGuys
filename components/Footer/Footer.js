/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

const gradient = 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.95), rgba(0,0,0,0.9), rgba(0,0,0,0.85))'

const InlineLink = props => (
  <Link href={props.href} name={props.name}{...props}>
    <a style={{
      fontWeight: 100,
      color: 'white',
      textShadow: '0px 1px 1px black'
    }}
    >
      {props.name}
    </a>
  </Link>
)

const Footer = () => (
  <div css={css`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    padding: 8vh 15vw 7vh 15vw;
    margin-bottom: 0; 
    width: 100vw; 
    box-shadow: 0px -1px 4px 1px rgba(0,0,0,0.8); 
    position: absolute; 
    bottom: 0; 
    font-size: 0.7rem;
    background: ${gradient};
    color: white;;
    font-weight: 100;
    `}
  >
    <p css={css`
    text-align: left
    `}
    >
    MIT © 2018</p>
    <InlineLink href='https://github.com/robertgrzonka' name='theGuys™ by Robert Grzonka' />
  </div>
)

export default Footer
