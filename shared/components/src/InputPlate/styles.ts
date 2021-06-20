import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 45px;
  margin-bottom: 15px;
  border-radius: 5px;
  border-width: 2px;
  /* background-color: black; */
  border-color: #ccc;
  align-items: center;
  padding: 5px;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #fa2e69;
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #003f82;
    `};
`

export const Field = styled.TextInput`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #003f82;
  padding: 5px;
  margin-left: 10px;
`
