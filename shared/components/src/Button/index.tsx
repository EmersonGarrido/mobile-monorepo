import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import * as S from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  )
}

export default Button
