import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Text = styled.Text``;

export const HeaderContainer = styled.View`
  align-items: center;
  padding: 15px;
`;

export const User = styled.Image.attrs({
  source: require('../../assets/user.png'),
  resizeMode: 'contain',
})`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const HeaderName = styled.Text`
  font-size: 18px;
`;

export const Description = styled.Text`
  font-size: 12px;
`;
export const Company = styled.Text`
  font-size: 16px;
  color: #003f82;
`;
/**
 * Menu Container
 *
 */

export const MenuContainer = styled.View`
  justify-content: center;
  padding: 10px 0;
  border-radius: 5px;
  width: 100%;
`;
export const MenuList = styled.View`
  overflow: hidden;
  border-radius: 5px;
  padding: 5px;
`;
export const MenuListItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  margin: 3px 0;
`;
export const MenuListItemContainerText = styled.View`
  flex: 1;
  padding: 0 10px;
`;
export const MenuListItemText = styled(HeaderName)`
  font-size: 16px;
`;
export const LineSeparetor = styled.View`
  background-color: #ccc;
  width: 100%;
  height: 1px; 
`;

export const UploadImageProfile = styled.View`
  position: absolute;
  background-color: white;
  border: 1px solid #003f82;
  border-radius: 500px;
  padding: 6px;
  bottom: 25%;
  right: 17%;
`;
