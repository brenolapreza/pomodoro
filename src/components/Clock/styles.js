import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.gray300};
  height: 90%;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray200};
`;

export const MainText = styled.Text`
  color: ${(props) => props.theme.colors.gray100};
`;
