import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

const Avatar = ({ size = 80, onPress = ()=>{}, url="https://cdn.pixabay.com/photo/2016/11/16/11/12/computer-1828603_960_720.jpg" }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles(size).avatar}
        source={{
          uri: url
        }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
