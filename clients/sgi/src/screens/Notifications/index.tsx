import React from 'react'
import { LogoHeader, ContainerPage } from '@shared/components'

import * as S from './styles'

const Notifications: React.FC = () => {
  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        <S.Title>Hello Notifications</S.Title>
      </S.Container>
    </ContainerPage>
  )
}

export default Notifications
