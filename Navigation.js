import React, {useEffect} from 'react'
import Home from './screens/Home'
import Cities from './screens/Cities'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import City from './screens/City';
import DrawerContent from './screens/DrawerContent'
import { NavigationContainer, } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack' 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackNavigator =()=>(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Cities' component={Cities}/>
    <Stack.Screen name="City" component={City}/>
  </Stack.Navigator>
)

const loginLs=async()=>{
  const token = await AsyncStorage.getItem('token')
  console.log(token)
}

const Navigation =()=>{

  useEffect(() => {
   loginLs
  }, [])
  
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cities" children={stackNavigator}/>
        <Drawer.Screen name="SignUp" component={SignUp}/>
        <Drawer.Screen name="LogIn" component={LogIn}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapDispatchToProps={
  logOut: userActions.logOut
}


export default connect(null, mapDispatchToProps)(Navigation)