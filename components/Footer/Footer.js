/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import Colors from '../../design/colors'

const gradient = 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(20,20,20,1), rgba(30,30,30,1), rgba(45,45,45,1))'

const InlineLink = props => (
  <Link href={props.href} {...props}>
    <a style={{
      fontWeight: 100,
      color: Colors.secondary,
      textShadow: `0px 0px 1px ${Colors.primary}`
    }} name={props.name}>
      {props.name}
    </a>
  </Link>
)

const Footer = () => (
  <div css={css`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    padding: 5vh 15vw 5vh 15vw;
    width: 100vw; 
    box-shadow: 0px -1px 7px rgba(0,0,0,1); 
    position: absolute; 
    bottom: 0; 
    font-size: 0.8rem;
    background: ${gradient};
    color: ${Colors.secondary};
    font-weight: 100;
    line-height: 1.5;
    `}
  >
    <InlineLink href='https://github.com/robertgrzonka' name='theGuys™ by Robert Grzonka' />
    MIT © 2018
  </div>
)

export default Footer
