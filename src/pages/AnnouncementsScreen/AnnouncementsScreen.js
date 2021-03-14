import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../../Components/Header';
import { GlobalStyles } from '../../GlobalStyles';

import Card from '../../Components/Card/Card';

const AnnouncementsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Header title={'Mural de Comunicados'} />
      <View style={GlobalStyles.container}>
        <Card
          title='Happy Hour'
          sub='No dia 25/06 teremos nosso 15º happy hour online, preparesse 
          vai ter diversos jogos e atividades ...'
          buttonText='ver tudo'
          content='Curabitur eget ultrices ligula. Nulla ullamcorper vulputate nibh. Fusce laoreet eleifend aliquam. Duis in dolor ut diam vehicula posuere pharetra vel leo. Sed faucibus rhoncus ligula, eu interdum libero vestibulum nec. Quisque pulvinar aliquam ultrices. Maecenas a bibendum sem. Phasellus ultrices urna in felis feugiat varius. Suspendisse pharetra ligula a metus fringilla, vitae '
          content='Curabitur eget ultrices ligula. Nulla ullamcorper vulputate nibh. Fusce laoreet eleifend aliquam. Duis in dolor ut diam vehicula posuere pharetra vel leo. Sed faucibus rhoncus ligula, eu interdum libero vestibulum nec. Quisque pulvinar aliquam ultrices. Maecenas a bibendum sem. Phasellus ultrices urna in felis feugiat varius. Suspendisse pharetra ligula a metus fringilla, vitae '
          onClick={() => setModalVisible(!modalVisible)}
        />
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text> modalText </Text>
        </Modal>
        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default AnnouncementsScreen;
