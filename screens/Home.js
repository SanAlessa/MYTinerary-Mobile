import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Home =({ navigation }) =>{

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}} >
          <ImageBackground style={styles.image} source={require('../assets/hero.jpg')}>
            <Header navigation={navigation} color={'#2962ff'} />
            <View style={styles.content}>
              <Text style={styles.textH1}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
              <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cities')}>
                <Text style={styles.cta}>Take me there!</Text>
                <Icon style={{paddingLeft: 10, paddingTop: 6}} name="arrow-right" size={20} color={'white'}/>
              </TouchableOpacity>
              <Image style={styles.logo} source={require('../assets/logo.png')}/>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -50
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
    backgroundColor: '#2962ff',
    borderRadius: 50,
    color: 'white',
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cta: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Home