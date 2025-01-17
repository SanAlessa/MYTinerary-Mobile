import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import Header from './Header'

const SignUp =({signUp, navigation})=>{

  const [user, setUser] = useState({firstname:'', lastname: '', email: '', password: ''})
  const [error, setError] = useState([])

  const signup=async()=>{
   const res = await signUp(user)
   if( res && !res.success && res.errors){
     res.errors.map(error=> setError(error.message))
   }else {
     setUser('')
     navigation.navigate("Cities")
   }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}source={require('../assets/Form.jpg')}>
        <Header navigation={navigation} color={'rgb(16,16,16)'}/>
        {error.length > 0 && <Text style={{color: 'red', fontSize: 23, textAlign: 'center'}}>{error}</Text>}
        <View style={styles.content}>
          <Text style={styles.text}>Please fill the form to Sign Up!</Text>
          <View style={styles.form}>
            <View style={styles.viewInput}><TextInput placeholder="Firstname" style={styles.input} value={user.firstname} onChangeText={(value)=>setUser({...user, firstname: value})}/></View>
            <View style={styles.viewInput}><TextInput placeholder="Lastname" style={styles.input} value={user.lastname} onChangeText={(value)=>setUser({...user, lastname: value})}/></View>
            <View style={styles.viewInput}><TextInput placeholder="Email" style={styles.input} value={user.email} onChangeText={(value)=>setUser({...user, email: value})}/></View>
            <View style={styles.viewInput}><TextInput placeholder="Password" secureTextEntry value={user.password} style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/></View>
          </View>
          <TouchableOpacity onPress={signup}>
            <View style={styles.button}>
              <Text style={styles.textButton}>Sign Up!</Text>
            </View>
          </TouchableOpacity>
          <Pressable style={styles.button} onPress={()=> navigation.navigate('LogIn')}>
            <Text style={styles.textButton}>Already have an account? Log In!</Text>
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
    borderRadius:15,
  },
  viewInput: {
    height: '10.7%',
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
    height: 30
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

const mapStateToProps = state =>{
  return {
    loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = {
  signUp: userActions.signUp
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)