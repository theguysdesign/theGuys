/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Body = ({ children }) => (
  <div css={css`
    display: inline-block;
    padding: 0 5vw 0 5vw;
    width: 70vw;
  `}
  >
    { children }
  </div>
)

export default Body
