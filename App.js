import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home'
import Cities from './screens/Cities'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import City from './screens/City';
import { NavigationContainer, } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack' 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackNavigator =()=>(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Cities' component={Cities}/>
    <Stack.Screen name="City" component={City}/>
  </Stack.Navigator>
)
 const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cities" children={stackNavigator}/>
        <Drawer.Screen name="SignUp" component={SignUp}/>
        <Drawer.Screen name="LogIn" component={LogIn}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}

export default App