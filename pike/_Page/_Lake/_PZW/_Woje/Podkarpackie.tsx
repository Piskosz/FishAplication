import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Podk = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const fishingDistricts = [
    'Okręg PZW Rzeszów',
    'Okręg PZW Przemyśl',
    'Okręg PZW Krosno',
    'Okręg PZW Tarnobrzeg',
    'Okręg PZW Stalowa Wola',
    'Okręg PZW Jarosław',
    'Okręg PZW Dębica',
    'Okręg PZW Ropczyce',
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Okręgi Wędkarskie w Podkarpaciu</Text>
        </View>

        <ScrollView style={styles.buttonList}>
          {fishingDistricts.map((district, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => setSelectedRegion(district)}
            >
              <Text style={styles.buttonText}>{district}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedRegion && (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Wybrany Okręg: {selectedRegion}</Text>
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
  buttonList: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 255, 0.6)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Podk;
