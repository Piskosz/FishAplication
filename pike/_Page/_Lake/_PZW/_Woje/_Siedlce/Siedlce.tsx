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

const Siedlce = () => {
  const waters = [
    { name: 'Doły Maciejowickie', district: 'gm. Maciejowice', area: '4,00 ha' },
    { name: 'Dół Kochowski', district: 'gm. Maciejowice', area: '1,34 ha' },
    { name: 'Garwolin - zalew', district: 'Garwolin', area: '1,87 ha' },
    { name: 'Godzisz - stawy', district: 'gm. Sobolew', area: '10,10 ha' },
    { name: 'Izydory - stawy', district: 'Stoczek Łukowski', area: '1,70 ha' },
    { name: 'Jezioro Piwonińskie', district: 'gm. Sobienie Jeziory', area: '17,37 ha' },
    { name: 'Jezioro Oblin', district: 'Oblin, gm. Maciejowice', area: '19,30 ha' },
    { name: 'Łaskarzew', district: 'Łaskarzew', area: '1,00 ha' },
    { name: 'Łosice - zalew', district: 'Łosice', area: '6,02 ha' },
    { name: 'Mrozy - doły pożwirowe', district: 'Mrozy', area: '4,00 ha' },
    { name: 'Pilawa – Staw Jordan', district: 'Pilawa', area: '0,95 ha' },
    { name: 'Podzamcze', district: 'Podzamcze, gm. Maciejowice', area: '12,58 ha' },
    { name: 'Pogorzel – staw', district: 'gm. Mińsk Mazowiecki', area: '2,77 ha' },
    { name: 'Trąbki – staw', district: 'gm. Pilawa', area: '1,00 ha' },
    { name: 'Węgrów – zalew', district: 'Węgrów', area: '8,13 ha' },
    { name: 'Zalew „Muchawka”', district: 'Siedlce', area: '26,50 ha' },
    { name: 'Żelechów - stawy', district: 'Żelechów', area: '9,40 ha' },
    { name: 'Zbiornik „Stare Biernaty”', district: 'Łosice', area: '8,54 ha' },
    { name: 'Siennica - stawy', district: 'Siennica', area: '4,00 ha' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Wody Pozaobwodowe - Siedlce</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwsiedlce.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Siedlce</Text>
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

export default Siedlce;
