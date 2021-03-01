import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Itinerary =({itinerary})=>{
    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{itinerary.title}</Text>
        <Image style={styles.image} source={{uri: itinerary.userPic}} />
        <Text style={styles.name}>{itinerary.userName}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon size={25} color={'red'} name="heart-outline"/><Text style={{marginLeft: 3,marginRight: 10, fontSize: 18}}>{itinerary.likes.length}</Text>
          <Icon size={25} color={'blue'} name="clock-outline"/><Text style={{marginLeft: 3,marginRight: 10, fontSize:18}}>{itinerary.hours} hs</Text>
          {[...Array(itinerary.price)].map((m, i) => {
          return <Icon key={i} size={25} color={'green'} name="cash"/>})}
        </View>
        {itinerary.activities.map(activity=> 
        <ImageBackground style={styles.activityImage} key={activity.title} imageStyle={{borderRadius: 20}} source={{uri: activity.image}}>
          <Text style={styles.activityTitle}>{activity.title}</Text>
        </ImageBackground>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 30
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 50,
    padding: 5
  },
  image: {
    width:100,
    height:100,
    borderRadius: 50,
    margin: 15
  },
  title: {
    textAlign: 'center',
    fontSize: 23
  },
  name: {
    fontSize:20
  },
  activityImage: {
    width:250, 
    height:200, 
    margin: 20, 
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  activityTitle: {
    fontSize: 18,
    color: 'white',
    backgroundColor: 'rgba(16,16,16,0.7)',
    width: '98%',
    textAlign: 'center',
    borderRadius: 30,
    padding: 5
  }
})

export default Itinerary