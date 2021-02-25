import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home'
import Cities from './screens/Cities'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

 const App = () => {
  return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name="Cities" component={Cities}></Drawer.Screen>
        <Drawer.Screen name="SignUp" component={SignUp}></Drawer.Screen>
        <Drawer.Screen name="LogIn" component={LogIn}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}

export default App