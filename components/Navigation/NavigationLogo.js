/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const NavigationLogo = () => (
  <div css={css`
    text-align: center;
    margin: 15px 0px;
    `}
  >
    <img src='/static/theguysdesign.svg' css={css`
       max-width: 7vw;
       min-width: 120px;
       width: 30vw;
     `}
    />
  </div>
)

export default NavigationLogo
