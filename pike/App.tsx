import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './_Page/HomePage'; // Your home page component
import Callendar from './_Page/_Callendar/Callendar'; 
import Maps from './_Page/_Lake/_Maps/Maps'; 
import Notes from './_Page/_Notes/Notes';
import Profile from './_Page/_Profile/Profile';
import Wetter from './_Page/_Wetter/Wetter';
import Login from './_Page/_Login/Login';
import Registry from './_Page/_Registery/Registery';
import Fishing_Maps from './_Page/_Lake/_PZW/_FishingMaps/FishingMaps';
import Podk from './_Page/_Lake/_PZW/_Woje/Podkarpackie';
import WebsiteUnderCon from './_Page/_Lake/_PZW/_Woje/WebstieUnderConstr';
import WaterTypeChoice from './_Page/_Lake/WaterTypeChoice ';
import FishingMapsCom from './_Page/_Lake/_Commercial/_Maps/FishingMapsCom';
import PodkarpackieCom from './_Page/_Lake/_Commercial/_Lakes/PodkarpackieCom';
import CzarnaSedziszowska from './_Page/_Lake/_Commercial/_Lakes/_Podkarpackie/_CzarnaSedziszowska';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // Set true if token exists
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Callendar" component={Callendar} />
        <Stack.Screen name="Maps" component={Fishing_Maps} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wetter" component={Wetter} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registry" component={Registry} />
        <Stack.Screen name="Podkarpackie" component={Podk} />
        <Stack.Screen name="Website" component={WebsiteUnderCon} />
        <Stack.Screen name="WaterType" component={WaterTypeChoice} />
        <Stack.Screen name="FishCom" component={FishingMapsCom} />
        <Stack.Screen name="PodkarpakieCom" component={PodkarpackieCom} />
        <Stack.Screen name="CzarnaSedziszowska" component={CzarnaSedziszowska} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
