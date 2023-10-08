import React from 'react'
import { StyledIcon } from './icon.styles'
import { IconTypes } from './icon-names'
export interface IIconProps {
  name?: string
  color?: string
  size?: string
  className?: string
}

interface IconElementProps {
  icon: () => React.ReactElement
}

function IconElement({ icon }: IconElementProps) {
  return <>{icon()}</>
}

export default function Icon({
  name,
  color = 'black',
  size = '60px',
  className,
}: IIconProps) {
  const getIconElement = IconTypes[name as keyof typeof IconTypes]
  return (
    <StyledIcon $color={color} $size={size} className={className}>
      {getIconElement && <IconElement icon={getIconElement} />}
    </StyledIcon>
  )
}
