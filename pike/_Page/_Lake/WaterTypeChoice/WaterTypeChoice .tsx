import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const WaterTypeChoice = ({ navigation }) => {
  return (
    <ImageBackground source={require('./ryba2.jpg')} style={styles.background}>
      <View style={styles.container}>
        {/* Nagłówek */}
        <View style={styles.headerContainer}>
          <View style={styles.headerBackground}>
            <Text style={styles.headerText}>WYBIERZ RODZAJ ŁOWISKA</Text>
          </View>
        </View>

        {/* Obrazek na środku */}
        <View style={styles.imageContainer}>
          <Image source={require('./MapaSkladek.jpg')} style={styles.image} />
        </View>

        {/* Przyciski */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FishCom')}
          >
            <Text style={styles.buttonText}>Łowiska Komercyjne</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Maps')}
          >
            <Text style={styles.buttonText}>Okręgi PZW</Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#007aff',
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WaterTypeChoice;
