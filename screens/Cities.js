import React,{ useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import CityCard from './CityCard'
import Header from './Header'


const Cities =({navigation})=>{

  const [cities, setCities] = useState([])

  useEffect(()=>{
    fetch('https://alessandro-mytinerary.herokuapp.com/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.response))
    .catch(error=> console.log(error))
  },[])

  return (
    <View style={styles.container}>
      <Header navigation={navigation} color={'rgb(20,20,20)'}/>
      <ScrollView>
        <Text style={{fontSize: 20, textAlign: 'center',  marginBottom: -50}}>Cities</Text>
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
    backgroundColor: 'rgb(250,250,250)',
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