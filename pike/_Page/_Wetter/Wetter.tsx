import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

interface WeatherData {
  name: string;
  weather: { main: string; description: string }[];
  main: { temp: number; humidity: number; pressure: number; temp_min: number; temp_max: number };
  wind: { speed: number };
  visibility: number;
}

const Wetter = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('');

  // Function to get the city name based on geolocation
  const getCityFromLocation = (latitude: number, longitude: number) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=e3d7873db4537bbeb2abd5161168df65&units=metric`
      )
      .then((response) => {
        setCity(response.data.name);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych pogodowych:', error);
      });
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getCityFromLocation(latitude, longitude);
      },
      (error) => {
        console.log('Geolocation error:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <ImageBackground
      source={require('./fish2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Header Text */}
        </View>
        
        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={styles.subHeaderText}>{city || weatherData.name}</Text>
            <Text style={styles.nearbyText}>
              {weatherData.weather[0].main} - {weatherData.weather[0].description}
            </Text>
            <Text style={styles.nearbyText}>
              Temperatura: {weatherData.main.temp}°C
            </Text>
            <Text style={styles.nearbyText}>
              Wilgotność: {weatherData.main.humidity}%
            </Text>
            <Text style={styles.nearbyText}>
              Ciśnienie: {weatherData.main.pressure} hPa
            </Text>
            <Text style={styles.nearbyText}>
              Temperatura minimalna: {weatherData.main.temp_min}°C
            </Text>
            <Text style={styles.nearbyText}>
              Temperatura maksymalna: {weatherData.main.temp_max}°C
            </Text>
            <Text style={styles.nearbyText}>
              Prędkość wiatru: {weatherData.wind.speed} m/s
            </Text>
            <Text style={styles.nearbyText}>
              Widoczność: {weatherData.visibility / 1000} km
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'CustomFont', // Użycie nowej czcionki
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  weatherContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  nearbyText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'CustomFont', // Użycie nowej czcionki
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default Wetter;
