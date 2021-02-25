import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, SafeAreaView, Button, ToastAndroid, Pressable} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Home =({ navigation }) =>{

  const prueba =()=>{
    ToastAndroid.show('PROBANDO!', ToastAndroid.SHORT)
    navigation.navigate('Cities')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Button title="Toggle" onPress={()=> navigation.toggleDrawer()}/>
      </SafeAreaView>
      <View style={{flex: 1}} >
        <ImageBackground style={styles.image} source={require('../assets/hero.jpg')}>
          <Text style={styles.textH1}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
          <Pressable style={styles.button} onPress={prueba}>
            <Text style={styles.cta}>Show Me!</Text>
          </Pressable>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: 'center',
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly'
  },
  textH1: {
    color: 'whitesmoke',
    width: '80%',
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30
  },
  logo:{
    resizeMode: 'stretch',
    width: '20%',
    height: '12%'
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    color: 'white',
    padding: '5%',
  },
  cta: {
    textAlign: 'center'
  }
});

export default Home