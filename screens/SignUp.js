import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const SignUp =()=>{

  const [user, setUser] = useState({firstname:'', lastname: '', email: '', password: ''})

  console.log(user)
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}source={require('../assets/hero.jpg')}>
        <Text>Please fill the form to Sign Up!</Text>
        <View style={styles.form}>
        <View style={styles.viewInput}><TextInput placeholder="Firstname" style={styles.input} onChangeText={(value)=>setUser({...user, firstname: value})}/></View>
        <View style={styles.viewInput}><TextInput placeholder="Lastname" style={styles.input} onChangeText={(value)=>setUser({...user, lastname: value})}/></View>
        <View style={styles.viewInput}><TextInput placeholder="Email" style={styles.input} onChangeText={(value)=>setUser({...user, email: value})}/></View>
        <View style={styles.viewInput}><TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/></View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    justifyContent: 'space-evenly',
    width: '90%',
    alignItems: 'center',
    borderWidth: 1
  },
  viewInput: {
    height: '10.2%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    opacity: 1,
    backgroundColor: 'white',
    fontSize: 20,
    borderRadius: 30,
    width: 200,
    textAlign: 'center',
  }
})

export default SignUp