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

const Zamosc = () => {
  const lakes = [
    { name: 'BEŁŻEC-ZAGÓRA', surface: 1.52, municipality: 'BEŁŻEC' },
    { name: 'BOJARY', surface: 7.80, municipality: 'BIŁGORAJ' },
    { name: 'CHOMICZYZNA', surface: 0.90, municipality: 'WERBKOWICE' },
    { name: 'DOBUŻEK', surface: 0.80, municipality: 'ŁASZCZÓW' },
    { name: 'Józefów', surface: 4.20, municipality: 'Józefów' },
    { name: 'KADŁUBISKA', surface: 1.72, municipality: 'DOŁHOBYCZÓW' },
    { name: 'KRASNOBRÓD-zb.kąpielowy', surface: 7.86, municipality: 'KRASNOBRÓD' },
    { name: 'KRYNICE', surface: 39.70, municipality: 'KRYNICE' },
    { name: 'LELISZKA', surface: 5.10, municipality: 'JARCZÓW' },
    { name: 'MAJDAN SOPOCKI', surface: 19.20, municipality: 'SUSIEC' },
    { name: 'MICHALÓW', surface: 0.70, municipality: 'SUŁÓW' },
    { name: 'MIRCZE', surface: 1.13, municipality: 'MIRCZE' },
    { name: 'MŁYNKI', surface: 5.20, municipality: 'BEŁŻEC' },
    { name: 'PODWODÓW', surface: 5.00, municipality: 'ŁASZCZÓW' },
    { name: 'ROGÓŹNO', surface: 18.83, municipality: 'TOMASZÓW' },
    { name: 'COKOŁÓWKA', surface: 0.73, municipality: 'FRAMPOL' },
    { name: 'STAW KAŚKI', surface: 0.80, municipality: 'IZBICA' },
    { name: 'RUDKA', surface: 6.70, municipality: 'ZWIERZYNIEC' },
    { name: 'STAW KOŚCIELNY', surface: 3.70, municipality: 'ZWIERZYNIEC' },
    { name: 'TARNOGRÓD', surface: 4.10, municipality: 'TARNOGRÓD' },
    { name: 'WERESZYN', surface: 2.21, municipality: 'MIRCZE' },
    { name: 'ZAMOŚĆ', surface: 18.20, municipality: 'ZAMOŚĆ' }
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Okręg Zamość</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzw.zamosc.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Zamość</Text>
        </TouchableOpacity>
        {lakes.map((lake, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{lake.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{lake.surface} ha
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Gmina: </Text>{lake.municipality}
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

export default Zamosc;
