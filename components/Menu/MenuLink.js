/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'

const MenuLink = props => (
  <div css={css`
  list-style-type: none;
  padding: 10px 0px;
    `}
  >
    <Link as={`/${props.id}`} href={`/${props.title}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </div>
)

export default MenuLink
