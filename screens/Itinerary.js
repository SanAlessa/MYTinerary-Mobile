import React, { useEffect } from 'react'
import { Text, View } from 'react-native'


const Itinerary =({_id})=>{
  console.log(_id)
  useEffect(()=>{
    fetch('http://192.168.0.6:4000/cities/')
  },[])

  return (
  <View>
    <Text>Itinerary</Text>
  </View>
  )
}

export default Itinerary