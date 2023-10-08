import styled from 'styled-components'

const StyledHeader = styled.header`
  display: block;
  width: 100%;
  min-height: 6rem;
  padding: 2rem 0;
  background-color: ${({ theme: { Color } }) => Color.PRIMARY};
  margin-bottom: 6rem;
`

const StyledHeaderTitle = styled.div`
  font-size: 3.6rem;
  color: ${({ theme: { Color } }) => Color.SECONDARY};
`

export { StyledHeader, StyledHeaderTitle }
