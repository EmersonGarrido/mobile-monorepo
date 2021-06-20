import React, { ReactNode } from 'react'
import Modal from 'react-native-modal'

import * as S from './styles'

interface Props {
  title?: string
  children: ReactNode
  onBackdropPress(): void
  isVisible: boolean
}

const ModalInfo: React.FC<Props> = ({
  children,
  title,
  onBackdropPress,
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <S.Container>
        {title && (
          <S.TitleContainer>
            <S.TitleTexto>{title}</S.TitleTexto>
          </S.TitleContainer>
        )}
        <S.Content>{children}</S.Content>
        <S.ActionContainer>
          <S.ActionButton onPress={onBackdropPress}>
            <S.ActionButtonText>Sim</S.ActionButtonText>
          </S.ActionButton>
          <S.ActionButton>
            <S.ActionButtonTextoCancel>Não</S.ActionButtonTextoCancel>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Container>
    </Modal>
  )
}

export default ModalInfo
