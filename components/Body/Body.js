/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Body = ({ children }) => (
  <div css={css`
  width: 50%;
  margin-right: 10%;
  overflow: scroll;
  `}
  >
    { children }
  </div>
)

export default Body
