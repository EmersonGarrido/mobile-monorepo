import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 14;
    text-align: center;
    color: #A9C2D4;
`;

export const ContainerCustomer = styled.View`
    padding: 10px;
`;

export const Name = styled.Text`
    text-align: center;
    color: #3C5071;
    font-size: 20px;
    font-weight: bold;
`;

export const ActionsInfoCustomer = styled.View``;

export const TitleAction = styled.Text`
    font-size: 16px;
    color: #1976D2;
    padding: 10px;
    margin-left: 5px;
    font-weight: bold;
`;

export const ViewDetails = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContainerCar = styled.View`
    padding:  0 20px;
`;

export const TitleInfo = styled.Text`
    color: #6A6868;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`;

export const TitleDescriptionInfo = styled.Text`
    color: #6A6868;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;

export const InfoPicture = styled.Text`
    color: #A9C2D4;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
`;

export const BoxUploadImage = styled.TouchableOpacity`
    padding: 50px;
    background-color: #f2f2f2;
    border: 1px solid #e1f1f1;
    border-radius: 5px;
    margin: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextBoxUploadImage = styled.Text`
    color: #A9C2D4;
    font-size: 12px;
`;

export const ModalMessage = styled.Text`
    font-size: 14px;
`;

export const BoxNegotion = styled.View`
    justify-content: center;
    align-items: center;
`;

export const InfoContainerBox = styled.View`
    margin:  5px 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f2f3f6;
`;

export const InfoCustomer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CustomerTitle = styled.Text`
    padding: 5px 0;
    font-weight: bold;
    text-align: center;
    color: #6A6868;
`;

export const Non = styled.Text``;

export const CameraOptions = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const CameraOptionTitle = styled.Text``;

export const ContainerCamera = styled.View`
    justify-content: center;
    margin: 5px;
    padding: 20px;
    align-items: center;
    text-align: center;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
`;

export const CameraOption = styled.TouchableOpacity`
    padding: 10px;
    align-items: center;
    text-align: center;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain'
  })`
    width: 10%;
    height: 10%;
    border-radius: 5px;
  `;