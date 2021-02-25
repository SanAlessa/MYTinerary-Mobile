import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground, ImageBackgroundComponent, Dimensions } from 'react-native'


const City =(props)=>{
  const city = props.route.params

  useEffect(()=>{
    fetch('http://192.168.0.6:4000/api//itineraries/'+city._id)
    .then(response=> response.json())
    .then(data=> console.log(data.response))
  },[])

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'rgb(16,16,16)', height: 157, borderBottomLeftRadius: 10, borderBottomRightRadius:10}}>
        <ImageBackground style={styles.image} imageStyle={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} source={{uri: city.cityPic}}>
          <View style={styles.header}>
            <Text style={styles.text}>{city.cityName}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(16,16,16,0.5)',
    width: '100%',
    textAlign: 'center'
  },
})

export default City