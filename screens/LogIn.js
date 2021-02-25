import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

const LogIn =({navigation})=>{

  const [user, setUser] = useState({email: '', password: ''})

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}source={require('../assets/Form.jpg')}>
        <Text style={styles.text}>Fill the form to Log In!</Text>
        <View style={styles.form}>
        <View style={styles.viewInput}><TextInput placeholder="Email" style={styles.input} onChangeText={(value)=>setUser({...user, email: value})}/></View>
        <View style={styles.viewInput}><TextInput placeholder="Password" style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/></View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Cities", {user})}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Log In</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color: 'white',
    fontSize: 20,
    marginBottom: 10
  },
  form: {
    justifyContent: 'space-evenly',
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'rgba(16,16,16,0.5)',
    borderRadius:15
  },
  viewInput: {
    height: '13.8%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 12,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    opacity: 1,
    backgroundColor: 'rgba(250,250,250,1)',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 18,
    height: 30,
    marginTop: -5
  },
  button: {
    backgroundColor: '#2196f3',
    borderRadius:15,
    marginTop: 10
  },
  textButton: {
    color: 'white',
    padding: '3%',
    fontSize: 18
  }
})
export default LogIn