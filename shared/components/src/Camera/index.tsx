import React from 'react'

import * as S from './styles'

interface ImageProps {
  text: string
  image: string
  onPress(): void
}

const Camera = ({ text, image, onPress }: ImageProps) => {
  return (
    <S.Content>
      {image ? (
        <>
          <S.Container>
            <S.Image source={{ uri: image }} />
          </S.Container>
          <S.Check />
        </>
      ) : (
        <S.Container onPress={onPress}>
          <>
            <S.Icon />
            <S.Text>{text}</S.Text>
          </>
        </S.Container>
      )}
    </S.Content>
  )
}
export default Camera
