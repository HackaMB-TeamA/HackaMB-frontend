import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import Avatar from '../avatar/index';

const Message = ({ author, urlPicture, message, pastTime }) => {
  return (
    <View style={styles.container}>
      <Avatar size={40}/>
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
