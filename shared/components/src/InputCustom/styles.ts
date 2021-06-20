import styled, {css} from 'styled-components/native';
import FontAwesomeIcon from '@expo/vector-icons/build/FontAwesome';

interface IconContainerProps {
  noMargin?: boolean;
}

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}


export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 45px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #1782FF;
  
  flex-direction: row;
  align-items: center;

  ${({isErrored}) => isErrored &&
    css`
      border-color: #FA2E69;
    `
  }
  ${({isFocused}) => isFocused &&
    css`
      border-color: #003f82;
    `
  }
`;

export const Field = styled.TextInput`
  flex: 1;
  height: 100%;
  color: #003f82;
  font-size: 16px;
  text-align: center;
`;


export const Label = styled.Text`
  color: #003f82;
  /* margin-bottom: 10px; */
  align-self: flex-start;
`;
