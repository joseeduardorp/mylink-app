import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  padding: 0 15px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex: 1;
`;

export const Header = styled.View`
  margin: 15px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #1ccbae;
`;

export const LongLinkUrl = styled.Text`
  margin-bottom: 30px;
  font-size: 17px;
  color: #a7a7a7;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  padding: 0 10px;
  width: 100%;
  height: 45px;
  background-color: #172742;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ShortLinkUrl = styled.Text`
  width: 90%;
  font-size: 16px;
  color: #fff;
`;