import React from 'react'
import Home from './screens/Home'
import Cities from './screens/Cities'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import City from './screens/City';
import {connect} from 'react-redux'
import { NavigationContainer, } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack' 
import userActions from './redux/actions/userActions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TouchableOpacity } from 'react-native'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out"/>
    </DrawerContentScrollView>
  );
}



const stackNavigator =()=>(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Cities' component={Cities}/>
    <Stack.Screen name="City" component={City}/>
  </Stack.Navigator>
)


const Navigation =({loggedUser, logFromLS})=>{

  if(loggedUser){
    var screens = 
    <>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Cities" children={stackNavigator}/>
    </>
  }else{
    screens = 
    <>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Cities" children={stackNavigator}/>
      <Drawer.Screen name="SignUp" component={SignUp}/>
      <Drawer.Screen name="LogIn" component={LogIn}/>
    </> 
  }



  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><CustomDrawerContent {...props} />}>
        {screens}
        {/* <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cities" children={stackNavigator}/>
        <Drawer.Screen name="SignUp" component={SignUp}/>
        <Drawer.Screen name="LogIn" component={LogIn}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps =(state)=>{
  return {
    loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = {
  logFromLS: userActions.logFromLS
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)