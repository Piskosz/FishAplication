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

const Radom = () => {
  const waters = [
    { name: 'rzeka Radomka nr 1', district: 'Radom-Przysucha', area: 'wody dopływów i starorzecza' },
    { name: 'rzeka Szabasówka', district: 'Łaziska - Zaborowie', area: 'dopływ rzeki Radomka' },
    { name: 'rzeka Jabłonica', district: 'Radom – Przysucha', area: 'dopływ rzeki Szabasówka' },
    { name: 'zbiornik Topornia', district: 'Radom', area: 'zbiornik wodny' },
    { name: 'zbiornik Młyny', district: 'Radom', area: 'zbiornik wodny' },
    { name: 'zbiornik Domaniów', district: 'Radom', area: 'zbiornik wodny' },
    { name: 'zbiornik Szydłowiec', district: 'Szydłowiec', area: 'zbiornik wodny' },
    { name: 'zbiornik Chałupki Łaziskie', district: 'Łaziska', area: 'zbiornik wodny' },
    { name: 'zbiornik Jastrząb', district: 'Jastrząb', area: 'zbiornik wodny' },
    { name: 'zbiornik Koszorów', district: 'Koszorów', area: 'zbiornik wodny' },
    { name: 'zbiornik Chlewiska', district: 'Chlewiska', area: 'zbiornik wodny' },
    { name: 'zbiornik Orłów', district: 'Orłów', area: 'zbiornik wodny' },
    { name: 'zbiornik Aleksandrów', district: 'Aleksandrów', area: 'zbiornik wodny' },
    { name: 'rzeka Radomka nr 2', district: 'Domaniów do Wisły', area: 'wody dopływów i starorzecza' },
    { name: 'rzeka Wiązownica', district: 'Wiązownica', area: 'dopływ rzeki Radomka' },
    { name: 'zbiornik Jagodno', district: 'Jagodno', area: 'zbiornik wodny' },
    { name: 'rzeka Tymianka', district: 'Tymianka', area: 'dopływ rzeki Radomka' },
    { name: 'rzeka Mleczna', district: 'Mleczna', area: 'dopływ rzeki Radomka' },
    { name: 'rzeka Pacynka', district: 'Pacynka', area: 'dopływ rzeki Mleczna' },
    { name: 'zbiornik Siczki Górne', district: 'Siczki', area: 'zbiornik wodny' },
    { name: 'zbiornik Siczki Dolne', district: 'Siczki', area: 'zbiornik wodny' },
    { name: 'zbiornik Borki', district: 'Borki', area: 'zbiornik wodny' },
    { name: 'starorzecza przy rzece Radomka (55+300)', district: 'Radomka', area: 'starorzecza, długość 1,25 km' },
    { name: 'starorzecza przy rzece Radomka (46+700)', district: 'Radomka', area: 'starorzecza, długość 2,25 km' },
  ];

  return (
    <ImageBackground
      source={require('./ryba2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Wody Nizinne - Radom</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('http://www.pzwradom.pl')}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Strona główna Okręgu Radom</Text>
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

export default Radom;
