import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  background-color: #fff;
  overflow: hidden;
  margin: 0 10px;
  border-radius: 5px;
`;

export const TitleContainer = styled.View`
  border-bottom-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  padding: 5px 0;
  align-items: center;
  justify-content: center;
`;

export const TitleTexto = styled.Text`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  font-size: 18px;
`;

export const Content = styled.View`
  padding: 30px 0;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const InfoTexto = styled.Text`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
`;

export const ActionContainer = styled.View`
  border-top-color: #ccc;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 0;
  border-right-color: #ccc;
  border-right-width: ${StyleSheet.hairlineWidth}px;
`;

export const ActionButtonText = styled(TitleTexto)``;

export const ActionButtonTextoCancel = styled(TitleTexto)`
  color: #fd4b1b;
`;
