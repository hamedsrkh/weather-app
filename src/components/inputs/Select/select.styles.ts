import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 100%;
  padding: 2rem;
  border: 1px solid ${({ theme: { Color } }) => Color.ACCENT};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background-color: ${({ theme: { Color } }) => Color.TERTIARY};
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 1rem);
  background-position-y: 50%;
  cursor: pointer;
  appearance: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.5rem ${({ theme: { Color } }) => Color.ACCENT};
  }
`
const StyledSelectLabel = styled.label`
  font-size: 2rem;
  margin-bottom: 1rem;
`
const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export { StyledSelect, StyledSelectLabel, StyledSelectWrapper }
