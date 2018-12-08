/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Button from '../components/Button'

const welcome = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden'
})

const background = css({
  backgroundImage: 'url(./static/dots2.png)',
  backgroundSize: '5%',
  backgroundRepeat: 'repeat',
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  opacity: '0.3',
  zIndex: '-1',
  overflow: 'hidden'
})

const svg = css({
  maxWidth: '20vw',
  minWidth: '15vw',
  marginBottom: '5vh'
})

export default () => (
  <div css={welcome}>
    <div css={background} />
    <img src='/static/theguysdesign.svg' css={svg} />
    <Button href='/blog' name='enter' />
  </div>
)
