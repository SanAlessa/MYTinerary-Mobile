import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const CityCard =({city, navigation})=>{
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('City', city)}>
            <ImageBackground style={styles.image} imageStyle={{borderRadius: 30}} source={{ uri: city.cityPic}}>
              <View style={styles.card}>
                <Text style={styles.text}>{city.cityName}</Text>
              </View>
            </ImageBackground>
      </TouchableOpacity>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 15,
  },
  image: {
    width: 300,
    height: 100, 
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  text: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    backgroundColor: 'rgba(16,16,16,0.5)',
    borderRadius: 30
  }
})



export default CityCard