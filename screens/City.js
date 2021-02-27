import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, ImageBackgroundComponent, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './Header'
import Itinerary from './Itinerary'

const City =(props)=>{
  const city = props.route.params.city
  const [itineraries, setItineraries] = useState([])

  useEffect(()=>{
    fetch('https://alessandro-mytinerary.herokuapp.com/api/itineraries/'+city._id)
    .then(response=> response.json())
    .then(data=> setItineraries(data.response))
    .catch(error => console.log(error))
  },[])

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'rgb(16,16,16)', height: 200, borderBottomLeftRadius: 10, borderBottomRightRadius:10}}>
        <ImageBackground style={styles.image} imageStyle={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} source={{uri: city.cityPic}}>
        <Header navigation={props.navigation} color={'white'}/>
          <View style={styles.header}>
            <Text style={styles.text}>{city.cityName}</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View>
          {itineraries.map(itinerary=><Itinerary itinerary={itinerary}/>)}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 190,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginTop: -60,
    fontSize: 25,
    backgroundColor: 'rgba(16,16,16,0.7)',
    width: '100%',
    textAlign: 'center'
  },
})

export default City