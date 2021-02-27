import React,{ useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import CityCard from './CityCard'


const Cities =({navigation, loggedUser})=>{

  const [cities, setCities] = useState([])

  
  useEffect(()=>{
    fetch('https://alessandro-mytinerary.herokuapp.com/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.response))
    console.log(loggedUser)
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

const mapStateToProps =state=> {
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(mapStateToProps)(Cities)