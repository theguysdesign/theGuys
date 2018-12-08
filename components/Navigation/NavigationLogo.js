/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const NavigationLogo = () => (
  <div css={css`
    text-align: center;
    margin: 15px 0px;
    `}
  >
    <img src='/static/tg.svg' css={css`
       max-width: 6vw;
       min-width: 70px;
     `}
    />
  </div>
)

export default NavigationLogo
