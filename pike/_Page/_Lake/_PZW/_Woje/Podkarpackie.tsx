import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Podk = ({ navigation }) => {
  const fishingDistricts = [
    { name: 'Okręg PZW Rzeszów', route: 'Rzeszow' },
    { name: 'Okręg PZW Przemyśl', route: 'Przemysl' },
    { name: 'Okręg PZW Krosno', route: 'Krosno' },
    { name: 'Okręg PZW Tarnobrzeg', route: 'Tarnobrzeg' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Okręgi Wędkarskie na Podkarpaciu</Text>
        </View>

        <ScrollView style={styles.buttonList}>
          {fishingDistricts.map((district, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                if (district.route) {
                  navigation.navigate(district.route);
                }
              }}
            >
              <Text style={styles.buttonText}>{district.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
});

export default Podk;
