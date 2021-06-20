import React from 'react'
import { StyleSheet } from 'react-native'
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select'

import * as S from './styles'

interface SelectProps extends PickerSelectProps {
  label: string
}

const Select: React.FC<SelectProps> = ({ label, ...rest }) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Container>
        <RNPickerSelect
          {...rest}
          placeholder={{
            label: 'Escolha uma opção...',
            value: null,
            color: '#1976D2'
          }}
          style={{
            ...pickerSelectStyles,
            placeholder: {
              paddingHorizontal: 20
            }
          }}
        />
      </S.Container>
    </>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 20,
    height: '100%'
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
    height: '100%'
  }
})

export default Select
