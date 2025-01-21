import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const HomePage = ({ navigation }) => {
  const [userLogin, setUserLogin] = useState(''); // Przechowywanie loginu w stanie

  // Pobieranie loginu z AsyncStorage po załadowaniu komponentu
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedLogin = await AsyncStorage.getItem('login'); // Pobranie loginu
        console.log('Fetched login from AsyncStorage:', storedLogin); // Log diagnostyczny
        setUserLogin(storedLogin || 'Nieznany użytkownik'); // Domyślna wartość w razie braku danych
      } catch (error) {
        console.error('Error fetching login from AsyncStorage:', error); // Obsługa błędów
        setUserLogin('Nieznany użytkownik'); // Domyślna wartość przy błędzie
      }
    };
    fetchUserData();
  }, []);

  // Obsługa wylogowania
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Usuwanie tokenu
      await AsyncStorage.removeItem('login'); // Usuwanie loginu
      console.log('User logged out and data cleared.'); // Log diagnostyczny
      navigation.replace('Login'); // Przejście do ekranu logowania
    } catch (error) {
      console.error('Error during logout:', error); // Obsługa błędów
    }
  };

  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Witaj, {userLogin}!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Wetter')}>
              <Icon name="cloud" size={40} color="white" />
              <Text style={styles.iconText}>Pogoda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Callendar')}>
              <Icon name="calendar" size={40} color="white" />
              <Text style={styles.iconText}>Kalendarz brań</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Notes')}>
              <Icon name="sticky-note" size={40} color="white" />
              <Text style={styles.iconText}>Notatki</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WaterType')}>
              <Icon name="map" size={40} color="white" />
              <Text style={styles.iconText}>Mapy łowisk</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Wyloguj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Zmniejszenie przezroczystości na 50%
    borderRadius: 50,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  iconText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomePage;
