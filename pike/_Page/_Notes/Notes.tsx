import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const Notes = () => {
  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>NOTATKI</Text>
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
  subHeaderText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  nearbyText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Lekko niebieski kolor
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Notes;
