import styled from '@emotion/styled'

const ParagraphText = styled.p`
  font-size: 1rem;
  text-indent: ${props =>
    props.indent
      ? '1rem'
      : 'none'};
`

export default ParagraphText
