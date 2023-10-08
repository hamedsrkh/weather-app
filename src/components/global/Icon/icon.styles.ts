import styled from 'styled-components'

interface ISpanProps {
  $size: string
  $color?: string
  theme: { Color: { BRAND_PRIMARY: string } }
}

export const StyledIcon = styled.span<ISpanProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size};
  color: ${({ $color }) => $color};
  line-height: 1;
  transition: all 250ms ease;
`
