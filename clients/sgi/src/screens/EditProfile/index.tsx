import React, { useRef, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Button, LogoHeader, ContainerPage, Input } from '@shared/components';

import { api } from '@shared/services';
import { useAuth } from '../../hooks/auth';

import * as S from './styles';

const EditProfile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleEditProfile = useCallback((data: object) => {
    api.put(`/users/${user.id}`, data);

    navigation.goBack();
  }, []);

  return (
    <ContainerPage>
      <LogoHeader isBack />
      <S.Container>
        <ScrollView>
          <S.ContainerInfos>
            <S.HeaderContainer>
              <S.User />
            </S.HeaderContainer>
            <Form ref={formRef} onSubmit={handleEditProfile} initialData={user}>
              <Input label="Nome" name="first_name" icon="user" />
              <Input label="Sobrenome" name="last_name" icon="user" />
              <Input
                label="Email"
                name="email"
                icon="envelope"
                editable={false}
              />
              <Input label="Telefone" name="telefone" icon="phone" />
              <Input label="Whatsapp" name="whatsapp" icon="whatsapp" />
              <Input label="Telegram" name="telegram" icon="telegram" />
              <Input label="CPF" name="cpf" icon="vcard" />
              <Input label="Facebook" name="facebook" icon="facebook" />
              <Input label="Instagram" name="instagram" icon="instagram" />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Salvar
              </Button>
            </Form>
          </S.ContainerInfos>
        </ScrollView>
      </S.Container>
    </ContainerPage>
  );
};

export default EditProfile;
