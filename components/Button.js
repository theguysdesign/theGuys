/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import Colors from '../design/colors'

const btn = css({
  boxShadow: '0px 1px 3px rgba(0,0,0,0.85)',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '7px 35px',
  margin: 5,
  fontWeight: 100,
  fontSize: '0.8em',
  fontVariant: 'small-caps',
  textTransform: 'uppercase',
  transition: 'all 0.6s',
  minWidth: '70px',
  border: `1px solid ${Colors.primary}`,
  backgroundColor: Colors.primary,
  color: Colors.secondary,
  '&:hover': {
    backgroundColor: Colors.secondary,
    color: Colors.primary,
    boxShadow: '0px 4px 8px rgba(0,0,0,0.95)'
  }
})

const Button = props => (
  <Link href={props.href} name={props.name}{...props}>
    <button css={btn} {...props}>
      {props.name}
    </button>
  </Link>
)

export default Button
