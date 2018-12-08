/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

const linkStyles = {
  marginLeft: 30,
  fontVariant: 'small-caps',
  textTransform: 'lowercase',
  fontSize: '1.3rem'
}

const NavigationIcons = () => (
  <div css={css`
    text-align: right;
    margin-right: 15vw;
    width: 30vw;
  `}>
    <Link href='https://github.com/theguysdesign'>
      <a style={linkStyles}>GitHub</a>
    </Link>
    <Link href='https://github.com/robertgrzonka'>
      <a style={linkStyles}>robertgrzonka</a>
    </Link>
  </div>
)

export default NavigationIcons
