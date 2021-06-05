import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share
} from 'react-native';

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongLinkUrl,
  ShortLinkArea,
  ShortLinkUrl
} from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

export default function ModalLink({ onClose }) {

  function handleCopyLink() {
    Clipboard.setString("https://seulink.com.br");
    alert("Link copiado com sucesso!");
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://seulink.com.br`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Activity Type");
        } else {
          console.log("Compartilhado com sucesso!");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Operação cancelada!");
      }
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={ onClose }>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={ onClose }>
            <Feather 
              name="x"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ handleShare }>
            <Feather 
              name="share"
              color="#212743"
              size={30}
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongLinkUrl numberOfLines={1} >
            https://sujeitoprogramador.com/
          </LongLinkUrl>

          <ShortLinkArea
            activeOpacity={1}
            onPress={ handleCopyLink }
          >
            <ShortLinkUrl numberOfLines={1} >
              https://bit.ly/f87as
            </ShortLinkUrl>
            <TouchableOpacity onPress={ handleCopyLink }>
              <Feather 
                name="copy"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}