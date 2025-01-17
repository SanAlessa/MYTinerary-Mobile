import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Header from './Header'

const LogIn =({navigation, logIn})=>{

  const [user, setUser] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const logUser = async ()=>{
    const res = await logIn(user)
    if(res && !res.success){
      setError(res.response)
    }else{
      setUser('')
      navigation.navigate("Cities")
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/Form.jpg')}>
        <Header navigation={navigation} color={'rgb(16,16,16)'}/>
        {error !== '' && <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>{error}</Text>}
        <View style={styles.content}>
          <Text style={styles.text}>Fill the form to Log In!</Text>
          <View style={styles.form}>
            <View style={styles.viewInput}><TextInput placeholder="Email" value={user.email} style={styles.input} onChangeText={(value)=>setUser({...user, email: value})}/></View>
            <View style={styles.viewInput}><TextInput placeholder="Password" secureTextEntry value={user.password} style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/></View>
          </View>
          <TouchableOpacity onPress={logUser}>
            <View style={styles.button}>
              <Text style={styles.textButton}>Log In</Text>
            </View>
          </TouchableOpacity>
          <Pressable style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.textButton}>Don't have an account? Sign Up!</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70
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
    fontSize: 18,
    textAlign: 'center'
  }
})

const mapStateToProps =state=>{
  return {
    loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = {
  logIn: userActions.logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)