import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import { slide as Menu } from 'react-burger-menu'

export default function App() {

  showSettings (e) {
    e.preventDefault();
  }

  return (
    <View style={styles.container}>
    <View style={{flex: 1}} >
      <ScrollView>
        <ImageBackground style={styles.image} source={require('./assets/heroimg.jpg')}>
        <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
        </ImageBackground>
        <View>
          <Text>Aqui va a ir el cta!</Text>
        </View>
      </ScrollView>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerItem:{
    color: 'white',
    fontSize: 20,
    paddingTop: 30
  }
});
