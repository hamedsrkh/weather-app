import React from 'react'
import { StyledHeader, StyledHeaderTitle } from './header.styles'
import { Container } from 'components/layouts'
import Link from 'next/link'

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Link href="/">
          <StyledHeaderTitle>Open Weather</StyledHeaderTitle>
        </Link>
      </Container>
    </StyledHeader>
  )
}
export default Header
