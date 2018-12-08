/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const MenuSegment = ({ children }) => (
  <div css={css`
  margin: 0 15vw;
  text-align: right;
  overflow: 'scroll'
  position: sticky;
  -webkit-position: sticky;
  `}
  >
    {children}
  </div>
)

export default MenuSegment
