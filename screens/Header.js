import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header =({navigation, color})=>{
  return (
    <View style={styles.header}>
      <Icon name="keyboard-backspace" color={color} size={50} onPress={()=> navigation.goBack()}/>
      <Icon name="menu" color={color} size={50} onPress={()=> navigation.toggleDrawer()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    height: 80
  },
  text: {
    color: 'white',
    fontSize: 25
  },
})

export default Header