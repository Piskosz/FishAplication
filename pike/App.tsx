import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './_Page/HomePage';
import Callendar from './_Page/_Callendar/Callendar';
import Maps from './_Page/_Maps/Maps';
import Notes from './_Page/_Notes/Notes';
import Profile from './_Page/_Profile/Profile';
import Wetter from './_Page/_Wetter/Wetter';
import Login from './_Page/_Login/Login';
import Registry from './_Page/_Registery/Registery';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Callendar" component={Callendar} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wetter" component={Wetter} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registry" component={Registry} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
