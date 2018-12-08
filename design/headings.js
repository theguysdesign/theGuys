import styled from '@emotion/styled'
import Colors from './colors'

export const H1 = styled.h1`
  font-size: 1.7em;
  font-weight: 100;
  color: ${props =>
    props.primary ? Colors.primary : Colors.gray}
`

export const H2 = styled.h2`
  font-size: 1.6em;
  font-weight: 100;
  color: ${props =>
    props.primary ? Colors.primary : Colors.gray}
`

export const H3 = styled.h3`
  font-size: 1.4em;
  font-weight: 200;
  color: ${props =>
    props.primary ? Colors.primary : Colors.gray}
`

export const H4 = styled.h4`
  font-size: 1.2em;
  font-weight: 300;
  color: ${props =>
    props.primary ? Colors.primary : Colors.gray}
`

export const H5 = styled.h5`
  font-size: 1em;
  font-weight: 500;
  color: ${props =>
    props.primary ? Colors.gray : Colors.secondary}
`

export const H6 = styled.h6`
  font-size: 0.8em;
  font-weight: 500;
  color: ${props =>
    props.primary ? Colors.gray : Colors.secondary}
`

export const Headings = { H1, H2, H3, H4, H5, H6 }
