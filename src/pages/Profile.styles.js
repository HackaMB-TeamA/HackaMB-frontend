import { StyleSheet, Dimensions } from 'react-native';
import { colors, size } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  userInfos: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginTop: 20,
    
  },
  userName: {
    fontSize: size.bigger,
    fontWeight: 'bold',
    color: colors.secondary,
    marginTop: 20,
  },
  occupation: {
    fontSize: size.big,
    fontWeight: 'bold',
    color: colors.secondary
  },
  infos:{
    flexDirection: 'row',
    marginTop: 10,
  },
  infoItem: {
    marginHorizontal: 10,
    marginTop: 10
  },
  userChats: {

  },
  userPosts: {
   
  },
  titleSection: {
    fontSize: size.big,
    color: colors.lightest,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size.big,
    color: colors.lightest,
  },
  buttonText: {
    fontSize: size.big,
    color: colors.secondary,
  },
  
});
