import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import Avatar from '../Avatar';

const Message = ({ author, urlPicture, message, pastTime }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
      <Avatar size={45} />
      <View style={styles.message}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.messageAuthor}>{author}</Text>
          <Text style={styles.messagePastTime}>{pastTime}</Text>
        </TouchableOpacity>
        <Text style={styles.messageContent}>{message}</Text>
      </View>
    </View>
  );
};

export default Message;
