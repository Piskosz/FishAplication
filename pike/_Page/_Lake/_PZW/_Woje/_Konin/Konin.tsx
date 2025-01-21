import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Konin = () => {
  const waters = [
    { name: 'Warta', description: 'N/A', type: 'Rzeka', fishingBoat: 'tak', district: 'Uniejów', fishingRestrictions: 'dopływy, starorzecza', dateRestrictions: '' },
    { name: 'Koziegłowy', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Ostrowite', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Ostrowite', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Ostrowite', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Orchowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Orchowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Słowikowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Orchowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Skubarczewo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Orchowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Rusin', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Powidz', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Degnera', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Orchowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Stępa', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Kleczew', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Suszewo-Wójcin', description: 'N/A', type: 'Rzeka', fishingBoat: 'tak', district: 'Wilczyn-Orchowo', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Głodowskie', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Kazimierz Biskupi', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Tulszków', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Tuliszków', fishingRestrictions: 'N/A', dateRestrictions: '' },
    { name: 'Zb. Ruszków', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Koło', fishingRestrictions: 'B,G,L', dateRestrictions: '' },
    { name: 'Zb. Marantów', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Konin', fishingRestrictions: 'M', dateRestrictions: '' },
    { name: 'Zb. Gliny', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Rychwał', fishingRestrictions: 'B', dateRestrictions: '' },
    { name: 'Zb. Morzysław', description: 'N/A', type: 'Zbiornik', fishingBoat: 'tak', district: 'Konin', fishingRestrictions: 'B,L', dateRestrictions: '' },
    { name: 'Zb. Strzałkowo', description: 'N/A', type: 'Zbiornik', fishingBoat: 'nie', district: 'Strzałkowo', fishingRestrictions: 'L,M', dateRestrictions: '' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Konin</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://opzw.konin.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Konin</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Opis: </Text>{water.description}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Typ: </Text>{water.type}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Wędkowanie z łodzi: </Text>{water.fishingBoat}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Gmina: </Text>{water.district}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Konin;
