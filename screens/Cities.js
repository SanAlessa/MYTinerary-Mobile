import React,{ useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import CityCard from './CityCard'


const Cities =({navigation})=>{

  const [cities, setCities] = useState([])

  useEffect(()=>{
    fetch('http://192.168.0.6:4000/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.response))
  },[])


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 50, marginBottom: -50}}>Cities</Text>
        <View style={styles.card}>
          {cities.map(city=> <CityCard key={city._id} city={city} navigation={navigation}/>)}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(250,250,250,1)',
  },
  card: {
    margin: 50,
  }
  
})

export default Cities