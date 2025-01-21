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

const Poznan = () => {
  const waters = [
    { name: 'Gołaszyn', description: '4,92 ha', type: 'Jeziory i wody drobne', fishingBoat: 'nie', district: 'Oborniki', fishingRestrictions: '2 kg / dobę', dateRestrictions: '' },
    { name: 'Górka', description: '1,33 ha', type: 'Jeziory i wody drobne', fishingBoat: 'nie', district: 'Kobylin', fishingRestrictions: '2 kg / dobę', dateRestrictions: '' },
    { name: 'Górznickie', description: '24,85 ha', type: 'Jeziory i wody drobne', fishingBoat: 'tak', district: 'Krzemieniewo', fishingRestrictions: 'zakaz zanęcania 15.06-15.09', dateRestrictions: 'zakaz zanęcania (podczas zawodów 1 kg / dobę); w pozostałym okresie 1 kg / dobę' },
    { name: 'Grodzisko', description: '18,31 ha', type: 'Jeziory i wody drobne', fishingBoat: 'tak', district: 'Osieczna', fishingRestrictions: 'zakaz zanęcania 15.06-15.09', dateRestrictions: 'zakaz zanęcania (podczas zawodów 1 kg / dobę); w pozostałym okresie 1 kg / dobę' },
    { name: 'Jezierzyckie', description: '61,37 ha', type: 'Jeziory i wody drobne', fishingBoat: 'tak', district: 'Śmigiel', fishingRestrictions: 'zakaz wędkowania na kanale Doprowadzalnik B', dateRestrictions: 'zakaz zanęcania (podczas zawodów 1 kg / dobę); w pozostałym okresie 1 kg / dobę' },
    { name: 'Kachlarski', description: '2,10 ha', type: 'Jeziory i wody drobne', fishingBoat: 'nie', district: 'Poznań', fishingRestrictions: 'Zakaz wjazdu samochodów i przyczep campingowych', dateRestrictions: '2 kg / dobę' },
    { name: 'Kiełczynek', description: '5,17 ha', type: 'Jeziory i wody drobne', fishingBoat: 'tak', district: 'Książ Wlkp.', fishingRestrictions: 'zakaz zanęcania 15.06-15.09', dateRestrictions: 'zakaz zanęcania (podczas zawodów 1 kg / dobę); w pozostałym okresie 1 kg / dobę' },
    { name: 'Kikowskie', description: '5,12 ha', type: 'Jeziory i wody drobne', fishingBoat: 'nie', district: 'Pniewy', fishingRestrictions: '2 kg / dobę', dateRestrictions: '' },
    { name: 'Konarskie', description: '6,49 ha', type: 'Jeziory i wody drobne', fishingBoat: 'tak', district: 'Książ Wlkp.', fishingRestrictions: 'zakaz zanęcania 15.06-15.09', dateRestrictions: 'zakaz zanęcania (podczas zawodów 1 kg / dobę); w pozostałym okresie 1 kg / dobę' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Poznań</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwwg.pl/')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Poznań</Text>
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
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Ograniczenia: </Text>{water.fishingRestrictions}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Zanęty: </Text>{water.dateRestrictions}
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
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

export default Poznan;
