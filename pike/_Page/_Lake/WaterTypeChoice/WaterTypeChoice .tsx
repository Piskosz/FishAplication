import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const WaterTypeChoice = ({ navigation }) => {
  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerBackground}>
            <Text style={styles.headerText}>WYBIERZ RODZAJ ŁOWISKA</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FishCom')}
          >
            <Text style={styles.buttonText}>Łowisko Komercyjne</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Maps')}
          >
            <Text style={styles.buttonText}>Woda PZW</Text>
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
  },
  container: {
    flex: 1,
    paddingTop: 50, // Dodałem odstęp od góry dla nagłówka
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Czarny pasek z przezroczystością
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', // Wyśrodkowanie przycisków w pionie
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaterTypeChoice;
