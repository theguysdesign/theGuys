/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const MenuHeader = props => (
  <div css={css`
    font-weight: 100;
    margin: 20px 0 15px 15vw;
    color: black;
    font-variant: small-caps;
    text-transform: uppercase;
    font-size: 1rem;
    `}{...props}
  >
    {props.title}
  </div>
)

export default MenuHeader
