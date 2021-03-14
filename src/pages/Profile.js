import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'; //  remove

import { styles } from './Profile.styles.js';
import { GlobalStyles, colors } from '../GlobalStyles';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <LinearGradient colors={['#F2AA52', '#FACF60']}>
        <View style={styles.userInfos}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/11/16/11/12/computer-1828603_960_720.jpg',
            }}
          />
          <Text style={styles.userName}> Jhon doe </Text>
          <Text style={styles.occupation}>  Front end developer </Text>

          <View style={styles.infos}>
            <View style={styles.infoItem}>
              <Ionicons name="ios-chatbox-sharp" color={colors.secondary} size={32} />
              <Text style={styles.occupation}>  01 </Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons name="book-sharp" color={colors.secondary} size={32} />
              <Text style={styles.occupation}>  03 </Text>
            </View>
          </View>

          {true ? (
            <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Ionicons name="pencil-sharp" color={colors.secondary} size={28} />
              <Text style={styles.buttonText} >Editar</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </LinearGradient>
      <View style={styles.container}>

        <View style={styles.userChats}>
          <Text style={styles.titleSection}>  Chats </Text>
        </View>

        <View style={styles.userPosts}>
          <Text style={styles.titleSection}>  Posts </Text>
        </View>

        <StatusBar style='light' />
      </View>
    </SafeAreaProvider>
  );
};

export default Profile;
