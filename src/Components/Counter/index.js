import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

// import { Container } from './styles';

const Counter = ({ id, number, selected /* onPress */ }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ backgroundColor: !selected ? '#fff' : 'rgba(0,0,0,0.2)' }}>
        <Text style={{ color: !selected ? '#000' : 'rgba(0,0,0,0.4)' }}>
          Counter {id}
        </Text>
        <Text style={{ color: !selected ? '#000' : 'rgba(0,0,0,0.4)' }}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Counter;
