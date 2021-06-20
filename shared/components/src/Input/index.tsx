import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react'
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'

import * as S from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
  viewPass?: string
  label?: string
  handleViewPass?: () => void
}

interface InputValueReference {
  value: string
}

interface InputRef {
  focus(): void
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, label, icon, viewPass, handleViewPass, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Container isFocused={isFocused} isErrored={!!error}>
        <S.IconContainer>
          <S.Icon
            name={icon}
            size={20}
            color={isFocused || isFilled ? '#003f82' : '#9d9fa6'}
          />
        </S.IconContainer>
        <S.Field
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#9d9fa6"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          onChangeText={value => {
            inputValueRef.current.value = value
          }}
          {...rest}
        />
        {viewPass && (
          <S.IconContainer noMargin={!!viewPass}>
            <S.Icon
              name={viewPass}
              size={20}
              color="#9d9fa6"
              onPress={handleViewPass}
            />
          </S.IconContainer>
        )}
      </S.Container>
    </>
  )
}

export default forwardRef(Input)
