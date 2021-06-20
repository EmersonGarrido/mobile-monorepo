import React, { ReactNode } from 'react'
import Modal from 'react-native-modal'

import * as S from './styles'

interface Props {
  title?: string
  children: ReactNode
  onGaleryPress(): void
  onCameraPress(): void
  isVisible: boolean
}

const ModalPicture: React.FC<Props> = ({
  children,
  title,
  onCameraPress,
  onGaleryPress,
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
          <S.ActionButton onPress={onCameraPress}>
            <S.ActionButtonText>CÂMERA</S.ActionButtonText>
          </S.ActionButton>
          <S.ActionButton onPress={onGaleryPress}>
            <S.ActionButtonText>GALERIA</S.ActionButtonText>
          </S.ActionButton>
        </S.ActionContainer>
      </S.Container>
    </Modal>
  )
}

export default ModalPicture
