import styled from 'styled-components'

const Alert = styled.div`
  display: block;
  width: 100%;
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  color: ${({ theme: { Color } }) => Color.ERROR_DEFAULT};
  background-color: ${({ theme: { Color } }) => Color.OVERLAY_ERROR};
`

export { Alert }
