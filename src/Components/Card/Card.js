import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// import { Container } from './styles';

const Card = ({ title, sub, content, reactions, onClick, buttonText }) => (
  <>
    <View
      style={{
        backgroundColor: '#3E4347',
        borderRadius: 5,
      }}
    >
      <View style={{ padding: 15 }}>
        <Text style={{ color: '#FFF', fontSize: 18, marginBottom: 10 }}>
          {title}
        </Text>
        <Text style={{ color: '#FFF' }}>{sub}</Text>
        <View>
          <TouchableOpacity onPress={onClick}>
            <Text> buttonText </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </>
);

export default Card;
