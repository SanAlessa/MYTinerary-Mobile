import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home'
import Cities from './screens/Cities'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import City from './screens/City';
import CityCard from './screens/CityCard';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack' 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

 const App = () => {
  return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cities" component={Cities}/>
        <Drawer.Screen name="SignUp" component={SignUp}/>
        <Drawer.Screen name="LogIn" component={LogIn}/>
        <Drawer.Screen name="CityCard" component={CityCard} options={{drawerLabel: () => null,title: null,drawerIcon: () => null}}/>
        <Drawer.Screen name="City" component={City} options={{drawerLabel: () => null,title: null,drawerIcon: () => null}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
}

export default App