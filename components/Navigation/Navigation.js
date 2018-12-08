/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Colors from '../../design/colors'
import NavigationMenu from './NavigationMenu'
import NavigationLogo from './NavigationLogo'
import NavigationIcons from './NavigationIcons'

const Navigation = () => (
  <div css={css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 1px 4px ${Colors.gray};
    width: 100vw;
    min-height: 10vh;
    max-height: 15vh;
    padding: 0 3vw;
  `}
  >
    <NavigationMenu />
    <NavigationLogo />
    <NavigationIcons />
  </div>
)

export default Navigation
