import styled from 'styled-components'
const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme: { Color } }) => Color.TERTIARY};
`

export { CardWrapper }
