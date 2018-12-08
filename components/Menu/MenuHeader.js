/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Colors from '../../design/colors'

const MenuHeader = props => (
  <div title={props.title} css={css`
    font-variant: small-caps;
    text-transform: lowercase;
    font-weight: 600;
    font-size: 1.3rem;
    color: ${Colors.pink};
    opacity: 0.7;
    `} {...props}
  >
    {props.title}
  </div>
)

export default MenuHeader
