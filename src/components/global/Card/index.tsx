import { CardWrapper } from './card.styles'
import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}
function Card({ children }: CardProps) {
  return <CardWrapper>{children}</CardWrapper>
}

export default Card
