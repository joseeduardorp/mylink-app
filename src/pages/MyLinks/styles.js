import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #132742;
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
  margin-left: 20px;
  font-size: 33px;
  font-weight: bold;
  color: #fff;
`;

export const ListLinks = styled.FlatList`

`;