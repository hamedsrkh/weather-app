import {
  StyledSelect,
  StyledSelectLabel,
  StyledSelectWrapper,
} from './select.styles'
import { ChangeEvent, useCallback, useState } from 'react'

type Option = {
  label?: string
  value: string | number
}
interface SelectInputProps {
  options: Option[]
  name: string
  label?: string
  placeholder?: string
  tabIndex?: number
  onChange?: (value: string) => void
  initialValue?: string | number
}
function SelectInput({
  options,
  name,
  label,
  placeholder = 'Choose an option...',
  tabIndex = 1,
  onChange,
  initialValue,
}: SelectInputProps) {
  const [value, setValue] = useState(() => initialValue)
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value)
      if (onChange) onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel>{label}</StyledSelectLabel>
      <StyledSelect
        placeholder={placeholder}
        name={name}
        tabIndex={tabIndex}
        onChange={handleChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  )
}

export default SelectInput
