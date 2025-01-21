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

const BialaPodlaska = () => {
  const waters = [
    { name: 'Zbiornik Mosty', district: 'parczewski', area: '403,5 ha' },
    { name: 'Zbiornik Podedwórze', district: 'parczewski', area: '289,9 ha' },
    { name: 'Zbiornik Żelizna', district: 'radzyński', area: '364,8 ha' },
    { name: 'Zbiornik Horodyszcze', district: 'bialski', area: '9,0 ha' },
    { name: 'Zb. Terespol „Aleja Marzeń"', district: 'bialski', area: '1,0 ha' },
    { name: 'Zb. Terespol „Między Torami”', district: 'bialski', area: '1,0 ha' },
    { name: 'Zb. Parczew „Relaks”', district: 'parczewski', area: '4,6 ha' },
    { name: 'Zbiornik Jabłoń', district: 'parczewski', area: '3,9 ha' },
    { name: 'Radzyń Podl. - Cegielnia', district: 'radzyński', area: '2,9 ha' },
    { name: 'Radzyń Podl. - Stawy', district: 'radzyński', area: '1,8 ha' },
    { name: 'Starorzecze - Hołyna 1-2', district: 'włodawski', area: '9,0 ha' },
    { name: 'Starorzecze – Kuzawka', district: 'bialski', area: '2,2 ha' },
    { name: 'Starorzecze - Sołodownia', district: 'bialski', area: '0,5 ha' },
    { name: 'Starorzecze Łęgi - Krzyczew', district: 'bialski', area: '6,6 ha' },
    { name: 'Starorzecze Liszna-Nowosiółki', district: 'bialski', area: '1,2 ha' },
    { name: 'Zbiornik Wyczółki', district: 'bialski', area: '5,0 ha' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Wody Pozaobwodowe - Biała Podlaska</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwbialapodlaska.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Biała Podlaska</Text>
        </TouchableOpacity>
        {waters.map((water, index) => (
          <View key={index} style={styles.infoBox}>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Nazwa: </Text>{water.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powiat: </Text>{water.district}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.bold}>Powierzchnia: </Text>{water.area}
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

export default BialaPodlaska;
