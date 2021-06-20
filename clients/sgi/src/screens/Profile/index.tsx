import React from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons'
import Icon from '@expo/vector-icons/build/Feather'

import { LogoHeader, ContainerPage } from '@shared/components'

import { useAuth } from '../../hooks/auth'

import COLORS from '../../constants'
import * as S from './styles'

const Profile: React.FC = () => {
  const { signOut, user } = useAuth()
  const navigation = useNavigation()

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        <ScrollView>
          <S.HeaderContainer>
            <S.User />
          </S.HeaderContainer>

          <S.HeaderContainer>
            <S.HeaderName>
              {user.first_name} {user.last_name}
            </S.HeaderName>
            <S.Description>{user.email}</S.Description>
          </S.HeaderContainer>
          <S.MenuContainer>
            <S.MenuList>
              <S.MenuListItem
                onPress={() => navigation.navigate('EditProfile')}
              >
                <FontAwesome
                  name="user-circle"
                  size={25}
                  color={COLORS.colors.primary}
                />
                <S.MenuListItemContainerText>
                  <S.MenuListItemText>Editar Perfil</S.MenuListItemText>
                </S.MenuListItemContainerText>
                <Ionicons
                  name="ios-arrow-forward"
                  size={25}
                  color={COLORS.colors.primary}
                />
              </S.MenuListItem>
              <S.LineSeparetor />
              <S.MenuListItem onPress={() => navigation.navigate('Teams')}>
                <FontAwesome
                  name="users"
                  size={25}
                  color={COLORS.colors.primary}
                />
                <S.MenuListItemContainerText>
                  <S.MenuListItemText>Ver Equipe RA</S.MenuListItemText>
                </S.MenuListItemContainerText>
                <Ionicons
                  name="ios-arrow-forward"
                  size={25}
                  color={COLORS.colors.primary}
                />
              </S.MenuListItem>
              <S.LineSeparetor />
              <S.MenuListItem>
                <Feather
                  name="help-circle"
                  size={25}
                  color={COLORS.colors.primary}
                />
                <S.MenuListItemContainerText>
                  <S.MenuListItemText>Suporte</S.MenuListItemText>
                </S.MenuListItemContainerText>
                <Ionicons
                  name="ios-arrow-forward"
                  size={25}
                  color={COLORS.colors.primary}
                />
              </S.MenuListItem>
              <S.LineSeparetor />
              <S.MenuListItem>
                <Icon name="log-in" size={20} color={COLORS.colors.primary} />
                <S.MenuListItemContainerText>
                  <S.MenuListItemText onPress={signOut}>
                    Sair
                  </S.MenuListItemText>
                </S.MenuListItemContainerText>
                <Ionicons
                  name="ios-arrow-forward"
                  size={25}
                  color={COLORS.colors.primary}
                />
              </S.MenuListItem>
            </S.MenuList>
          </S.MenuContainer>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  )
}

export default Profile
