import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

const SearchBar = ({ size = 80, onPress = ()=>{}, url="https://cdn.pixabay.com/photo/2016/11/16/11/12/computer-1828603_960_720.jpg" }) => {
  const [ value, setValue ] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <TextInput
        placeholder="Pesquisar"
          style={styles.input}
          onChangeText={text => setValue(text)}
          value={value}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
