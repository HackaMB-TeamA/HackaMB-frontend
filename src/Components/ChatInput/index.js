import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from './../../GlobalStyles';
// const styles = {}

const ChatInput = () => {
  const [ value, setValue ] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity>
          <Ionicons name="md-add" color={colors.secondary} size={32} />
        </TouchableOpacity>

          <TextInput
            placeholder="Pesquisar"
            style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
          />
          
        <TouchableOpacity>
          <Ionicons name="md-send-sharp" color={colors.secondary} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;
