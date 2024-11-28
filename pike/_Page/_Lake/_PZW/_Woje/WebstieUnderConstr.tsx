import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const WebsiteUnderCon = () => {
  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>NOTATKI</Text>
        </View>

        {/* Sekcja z napisem "Strona w trakcie budowy" */}
        <View style={styles.messageContainer}>
          <Text style={styles.constructionText}>Strona w trakcie budowy</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  messageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  constructionText: {
    fontSize: 20,
    color: 'yellow', // Tekst wyróżniony na żółto
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WebsiteUnderCon;
