import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  margin: 7px 10px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.21);
  border-radius: 7px;
  flex-direction: row;
`;

export const Item = styled.Text`
  padding-left: 10px;
  padding-right: 20px;
  font-size: 18px;
  color: #fff;
`;

export const ActionContainer = styled.TouchableOpacity`
  margin: 7px 10px;
  width: 15%;
  background-color: #ff5555;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;