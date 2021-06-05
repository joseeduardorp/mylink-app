import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
  margin-top: ${Platform.OS === "ios" ? 35+'px' : 15+'px'};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === "ios" ? 25+'%' : 15+'%'};
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const SubTitle = styled.Text`
  padding-bottom: 10%;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const ContainerInput = styled.View`
  margin: 15px 0;
  padding: 0 15px;
  width: 100%;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
`;

export const BoxIcon = styled.View`
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  align-items: center;
  justify-content: center;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 17px;
  color: #fff;
`;

export const ButtonLink = styled.TouchableOpacity`
  margin: 0 15px;
  margin-bottom: 15px;
  height: 45px;
  background: #fff;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
`;